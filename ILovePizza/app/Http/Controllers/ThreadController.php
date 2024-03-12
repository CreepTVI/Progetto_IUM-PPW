<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Notifications\CommentReceived;
use App\Notifications\LikeRecived;
use Illuminate\Http\Request;
use App\Models\Thread;
use Carbon\Carbon;
use \Conner\Tagging\Model\Tag;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Redirect;
use App\Models\User;
use App\Notifications\InternalNotification;
use Exception;
use Auth;
use Notification;


class ThreadController extends Controller
{  
    public function serve(){
        return view('newThread',[
            'user' => Auth::user(),
            'date' => Carbon::today()->formatLocalized('%d/%m/%Y'),
            'suggested' => Tag::suggested()->get(),
        ]);
    }

    public function create(Request $request) {
        try {
            if(Auth::user()->hasRole('representative') || Auth::user()->hasRole('member')) {
                $validatedData = $request->validate([
                    'title' => ['required','string','max:100', 'min:3'],
                    'text' => 'required|max:500',
                    'tags' => 'required',
                    'photo' => 'file',
                ]);

                $thread = Thread::create([
                    'title' => $validatedData['title'],
                    'text' => $validatedData['text'],
                    'user_id' => Auth::user()->id,
                    'photo' => (isset($validatedData['photo']) ) ? $validatedData['photo']->store('public') : null,
                ]);

                foreach($validatedData['tags'] as $tag){
                    $thread->tag($tag);
                }

                $request->session()->flash('success', 'Thread creato!');
                return Redirect::route('thread.show', ['id' => $thread->id]);
            } else {
                $request->session()->flash('error', 'Non possiedi i permessi necessari!');
                return redirect()->back();
            }

        } catch (ValidationException $er) {
            return redirect()->back()->withErrors($er->validator->errors());
        }
    }

    public function destroy(Request $request){
        try
        {   
            $thread = Thread::find($request->thread_id);
            if  (
                    (Auth::user()->hasRole('representative') || Auth::user()->hasRole('member')) 
                    && 
                    $thread->user_id == auth()->user()->id
                )
            {

            $thread->untag();

            if($thread->photo){
                $img = public_path().'/storage/'.basename($thread->photo);
                file_exists($img)? unlink($img) : null;
            }

            $thread->deleteComments();

            $thread->delete();

            $request->session()->flash('success', 'Thread eliminato!');
            }else{
                $request->session()->flash('error', 'Non possiedi i permessi necessari!');
                return redirect()->back();
            }
            return redirect()->route('explore');
        }catch(ValidationException $er){
            return redirect()->back()->withErrors($er->validator->errors());
        }
    }

    public function getThread($id) {
        $thread = Thread::findOrFail($id);
        return view('thread', [
            'thread' => $thread,
            'tags' => $thread->tags? $thread->tags : null,
            'creator' => User::find($thread->user_id),
            'user' => $thread->user,
            'suggested' => Tag::suggested()->get(),
        ]);
    }

    public function list(Request $request) {
        try {

            $query = Thread::with('user');
            
            $referer = $request->header('referer');
            $isHomePage = strpos($referer, url('/home')) !== false;

            if($isHomePage){
                $query->where('user_id', Auth::user()->id);
            }else{

                $filter_date_from = $request->get('filter_date_from');
                $filter_date_at = $request->get('filter_date_at');
                $filter_tag = $request->get('filter_tag');
                $filter_association = $request->get('filter_association');
                
                $page = $request->input('page', 1);

                
                if ($filter_date_from) {
                    $query->where('created_at', '>=', $filter_date_from);
                }
            
                if ($filter_date_at) {
                    $query->where('created_at', '<=', $filter_date_at);
                }
            
                if ($filter_tag) {
                    $query->withAnyTag($filter_tag);
                }
            
                if ($filter_association) {
                    $query->whereHas('user', function ($query) use ($filter_association) {
                        $query->whereHas('association', function ($query) use ($filter_association) {
                            $query->where('name', $filter_association);
                        });
                    });
                }
            }

            $threads = $query->paginate(5);
    
            return response()->json([
                'data' => view('partials.threadsPagination', compact('threads'))->render(),
                'links' => $threads->links()->toHtml(),
            ]);
        } catch (Exception $e) {
            return response()->json([
                'error' => $e->getMessage(),
            ], 500);
        }
    }
    
    public function addRemoveLike($id){
        try{

            $thread = Thread::find($id);

            if($thread->liked()){
                $thread->unlike();
            }else{
                $thread->like();

                $liker = Auth::user();
                $threadOwner = User::find($thread->user_id);
                if ($threadOwner->id !== $liker->id)
                    $threadOwner->notify(new LikeRecived($liker, $thread));
            }
            return response()->json([
             'success' => true,
            ]);

        }catch(\Throwable $th){
            return response()->json([
                'error' => 'Errore durante l\'aggiunta o rimozione del like.',
            ], 500);
        }
    }

    public function getLikes($id) {
        try {
            $thread = Thread::find($id);
            return response()->json([
                'data' => view('partials.likesBtn', compact('thread'))->render(),
                
            ]);
        } catch (\Throwable $ex) {
            return response()->json([
                'error' => 'Errore durante il recupero dei likes. Verifica i log per ulteriori dettagli.',
            ], 500);
        }
    }

    public function getComments(Request $request, $id) {
        try {
            $page = $request->input('page', 1);
            $comments = Thread::find($id)->comments()->orderBy('created_at', 'desc')->paginate(5, ['*'], 'page', $page);
            $comment_count = $comments->count();

            return response()->json([
                'data' => view('partials.threadComments', compact('comments','id', 'comment_count'))->render(),
                'totalPage' => (int)($comments->lastPage()),
            ]);
        } catch (\Throwable $ex) {

            return response()->json([
                'error' => 'Errore durante il recupero dei commenti. Verifica i log per ulteriori dettagli.',
            ], 500);
        }
    }

    public function addComment(Request $request, $id) {
        try {
            $thread = Thread::find($id);

            $validatedData = $request->validate([
                'text' =>'required|max:255',
            ]);

            $thread->comment($validatedData['text']);

            $commentator = User::find($request->user_id);
            $threadOwner = User::find($thread->user_id);
            if ($threadOwner->id !== $commentator->id)
                $threadOwner->notify(new CommentReceived($commentator, $thread));

            return response()->json([
                'success' => true,
            ]);
        } catch (ValidationException $er) {
            return response()->json([
                'error' => $er->validator->errors(),
            ], 500);
        }
    }

    public function markNotificationsAsRead($notification_id, $thread_id){
        try{
            $user = Auth::user();
            $user->unreadNotifications->where('id',$notification_id)->markAsRead();
            return redirect()->route('thread.show', $thread_id);
        }catch(\Throwable $th){
            return redirect()->back()->withErrors('error', $th->getMessage());
        }
    }
    
}
