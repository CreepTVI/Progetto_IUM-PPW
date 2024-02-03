<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;
use Illuminate\Validation\ValidationException;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): View
    {
        $registrationAttempt = session('registration_form_active');
        return view('auth.login',['registrationAttempt' => $registrationAttempt]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(Request $request): RedirectResponse
    {

        $check = $request->all();

        $remember = isset($check['remember']) ? (bool)$check['remember'] : false;

        switch($check['user_type']){

            case '1':
                // verifica se è un utente
                if (Auth::attempt(['email' => $check['email'], 'password'=> $check['password']], $remember)) {
                    // nuovo ID per la sessione
                    $request->session()->regenerate();
                    return redirect()->route('user.dashboard')->withCookie(cookie('user_type', 'user'))->with('success', 'login effettuato!');    
                }
                break; 

            case '2':
            // Verifica se è un rappresentante
                if(Auth::guard('representative')->attempt(['email' => $check['email'], 'password'=> $check['password']], $remember)){
                    // nuovo ID per la sessione
                    $request->session()->regenerate();
                    return redirect()->route('representative.dashboard')->withCookie(cookie()->forever('user_type', 'representative'))->with('success', 'login effettuato!');
                }
                break;

        }
        // altrimenti riotrna un messaggio di errore
        throw ValidationException::withMessages([
            'email' => trans('auth.failed'),
        ]);
    }
}
