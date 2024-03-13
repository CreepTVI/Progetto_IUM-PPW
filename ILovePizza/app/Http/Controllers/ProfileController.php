<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Association;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;
use App\Models\User;
use Illuminate\Validation\Rule;

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
        $dataValidate = $request->validate([
            'name' => ['required','string','max:255','min:3'],
            'email' => ['required','string','lowercase','email','max:255',Rule::unique(User::class)->ignore($request->user()->id),],
            'photo' => 'file',
        ]);
        $data = [
            'name' => $dataValidate['name'],
            'email' => $dataValidate['email'],
        ];
        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }
        
        if ($request->hasFile('photo')) {
            if(Auth::user()->photo) {
                $img = public_path().'/storage/'.basename(Auth::user()->photo);
                file_exists($img) ? unlink($img) : null;
                $data['photo'] = $dataValidate['photo']->store('public');
            }else{
                $data['photo'] = $dataValidate['photo']->store('public');
            }
        }
        User::where('id', $request->user()->id)->update($data);
        $request->session()->flash('success', __('general.profile_update'));
        return redirect()->route('profile.edit')->with('status', 'profile-updated');
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

        if ($request->user()->photo) {
            $img = public_path().'/storage/'.basename($user->photo);
            file_exists($img) ? unlink($img) : null;
        }
        Auth::logout();


        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        $request->session()->flash('success', __('general.profile_delete'));

        return Redirect::to('/');
    }
}
