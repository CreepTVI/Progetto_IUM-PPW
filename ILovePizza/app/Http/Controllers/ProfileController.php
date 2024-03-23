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
use BeyondCode\Comments\Comment;

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

        $user = User::find($request->user()->id);
        $user->name = $dataValidate['name'];
        $user->email = $dataValidate['email'];


        if ($request->hasFile('photo')) {
            if($user->photo) {
                $img = public_path().'/storage/'.basename($user->photo);
                file_exists($img) ? unlink($img) : null;
                $user->photo = $dataValidate['photo']->store('public');
            }else{
                $user->photo = $dataValidate['photo']->store('public');
            }
        }
        
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }
        $user->save();
        $user->searchable();
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
        $comments = Comment::where('user_id', $user->id)->get();
        foreach ($comments as $comment) {
            $comment->delete();
        }
        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        $request->session()->flash('success', __('general.profile_delete'));

        return Redirect::to('/');
    }
}
