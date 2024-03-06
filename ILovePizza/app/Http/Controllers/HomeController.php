<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\User;

class HomeController extends Controller
{
    public function serve(){
        $user = Auth::user();
            
        return view('home',[
            'members' => $user->association ? User::role('member')
                        ->where('association_id', $user->association->id)
                        ->withCount('threads')
                        ->orderByDesc('threads_count')
                        ->take(3)
                        ->get() : null ,
            'representative' => $user->association? User::find($user->association->representative_id) : null
        ]);
    }
}
