<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use BeyondCode\Comments\Comment;
use App\Models\Thread;
use Auth;
use App\Models\User;

class HomeController extends Controller
{
    public function serve(Request $request){
        $user = Auth::user();

        $comments = Comment::where('user_id', $user->id)->pluck('commentable_id');
        $recentlyInteractedThreads = Thread::whereIn('id', $comments)->orderByDesc('created_at')
                                    ->take(3)
                                    ->with('user')
                                    ->get();
            
        return view('home',[
            'members' => $user->association ? User::role('member')
                        ->where('association_id', $user->association->id)
                        ->withCount('threads')
                        ->orderByDesc('threads_count')
                        ->take(3)
                        ->get() : null ,
            'threads' => ThreadController::list($request),
            'representative' => $user->association? User::find($user->association->representative_id) : null,
            'recent_threads' => $recentlyInteractedThreads
        ]);
    }
}
