<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Thread;
use Carbon\Carbon;
use \Conner\Tagging\Model\Tag;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Redirect;
use App\Models\User;
use Exception;
use Auth;

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

                $thread->delete();

                $request->session()->flash('success', 'Thread eliminato!');
            }else{
                $request->session()->flash('error', 'Non possiedi i permessi necessari!');
                return redirect()->back();
            }

        }catch(ValidationException $er){
            return redirect()->back()->withErrors($er->validator->errors());
        }
        return redirect()->route('thread.list');
    }

    public function getThread($id) {
        $thread = Thread::find($id);
        return view('thread', [
            'thread' => $thread,
            'tags' => $thread->tags? $thread->tags : null,
            'creator' => User::find($thread->user_id),
            'user' => $thread->user,
            'suggested' => Tag::suggested()->get()
        ]);
    }

    public function list(Request $request) {
        try {
            $filter_date_from = $request->get('filter_date_from');
            $filter_date_at = $request->get('filter_date_at');
            $filter_tag = $request->get('filter_tag');
            $filter_association = $request->get('filter_association');
    
            $page = $request->input('page', 1);

            $query = Thread::with('user');
    
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
    
            $threads = $query->paginate(2);
    
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
    
}