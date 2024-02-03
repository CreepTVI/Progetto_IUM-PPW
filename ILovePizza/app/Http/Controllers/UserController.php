<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Contracts\Auth\CanResetPassword;
use Auth;

class UserController extends Controller
{
    public function index(){
        return view('explore');
    }

    public function destroy(Request $request){

        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        $cooki = Cookie::forget('user_type');

        return redirect()->route('login')->withCookie($cooki)->with('success', 'logout effettuato!');
    }

}
