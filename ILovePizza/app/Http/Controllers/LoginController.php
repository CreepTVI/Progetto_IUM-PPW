<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    public function login()
    {
        // if(Auth::check()){
        //     return view('login_signup.login');
        // }else{
        //     return redirect('logout');
        // }
        return view('login_signup.login');
    }

    // Gestisci login
    public function handleLogin(Request $request){
        $data = $request->all();

        dd($data);

        if(Auth::attempt($data, $request->remember)){
            return view('home');
        }else{
            return view('login_signup.login')->with(array('error' => 1));
        }
    }

    // Registra utente
    public function register(Request $request){
        $user = $request->all();
        
        dd($user);
        return view('login');
    }
}
