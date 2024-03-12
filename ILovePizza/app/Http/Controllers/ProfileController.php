<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Association;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): View
    {
        return view('profile.edit', [
            'user' => $request->user(),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }
        
        if ($request->user()->photo) {
            if(Auth::user()->photo) {
                $img = $request->hasFile('photo') ? public_path().'/storage/'.basename($request->user()->photo) : null;
                file_exists($img) ? unlink($img) : null;
                $request->user()->photo = $request->file('photo')->store('public');
            }else{
                $request->user()->photo = $request->file('photo')->store('public');;
            }
        }

        $request->user()->save();

        $request->session()->flash('success', 'Aggiornamento dei tuoi dati effettuato!');

        return Redirect::route('profile.edit')->with('status', 'profile-updated');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validateWithBag('userDeletion', [
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        if ($request->user()->photo) {
            $img = public_path().'/storage/'.basename($user->photo);
            file_exists($img) ? unlink($img) : null;
        }

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        $request->session()->flash('success', 'Account eliminato');

        return Redirect::to('/');
    }
}
