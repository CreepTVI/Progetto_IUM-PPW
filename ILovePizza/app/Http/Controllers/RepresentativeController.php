<?php

namespace App\Http\Controllers;

use Illuminate\Validation\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Validation\Rules;
use App\Models\User;
use App\Models\Representative;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Cookie;
use Auth;

class RepresentativeController extends Controller
{
    public function index(){
        return view('home');
    }

    public function login(Request $request){
        try{
            $check = $request->all();

            $remember = isset($check['remember']) ? (bool)$check['remember'] : false;
    
            // Verifica prima se è un rappresentante
            if(Auth::guard('representative')->attempt(['email' => $check['email'], 'password'=> $check['password']], $remember)){
                // nuovo ID per la sessione
                $request->session()->regenerate();
                return redirect()->route('representative.dashboard')->withCookie(cookie('user_type', 'representative'))->with('success', 'login effettuato!');
            }
    
            // verifica se è un utente
            if (Auth::attempt(['email' => $check['email'], 'password'=> $check['password']], $remember)) {
                // nuovo ID per la sessione
                $request->session()->regenerate();
                return redirect()->route('user.dashboard')->withCookie(cookie('user_type', 'user'))->with('success', 'login effettuato!');    
            }
        }catch (ValidationException $ex){
            $request->session()->invalidate();

            $request->session()->regenerateToken();
            // altrimenti riotrna un messaggio di errore
            throw ValidationException::withMessages([
                'email' => trans('auth.failed'),
            ]);
        }
    }

    // funzione per il logout
    public function destroy(Request $request){

        Auth::guard('representative')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        $cooki = Cookie::forget('user_type');

        return redirect()->route('login')->withCookie($cooki)->with('success', 'logout effettuato!');
    }

    public function register(Request $request){
        $request->session()->flash('registration_form_active', true);

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        if($request->association != null){
            $representative = Representative::create([
                'representative' => $request->name,
                'email' => $request->email,
                'association'=> $request->association,
                'password' => Hash::make($request->password)
            ]);
            event(new Registered($representative));
        }else{
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            event(new Registered($user));
        }
        $request->session()->flash('registration_form_active', false);

        return redirect()->route('login')->with('success', 'Registrazione avvenuta correttamente!');
    }
}
