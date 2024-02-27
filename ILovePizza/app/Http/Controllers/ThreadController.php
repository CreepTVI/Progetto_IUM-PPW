<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Models\Thread;

class ThreadController extends Controller
{
    public function create(Request $request) {

        try {
                if(Auth::user()->hasRole('representative') || Auth::user()->hasRole('representative')) {
                $validatedData = $request->validate([
                    'text' => 'required|max:500',
                    'pizza_type' => 'required',
                    'photo' => 'file',
                ]);

                $thread = Thread::create([
                    'text' => $validatedData['text'],
                    'pizza_type' => $validatedData['pizza_type'],
                    /*'photo' => $validatedData['photo'],*/
                    'user_id' => Auth::user()->id,
                    'photo' => $validatedData['photo']->hasFile('photo') ? $validatedData['photo']->file('photo')->store('public') : null,
                ]);

                $request->session()->flash('success', 'Thread creato!');
                
            } else {
                $request->session()->flash('error', 'Non possiedi i permessi necessari!');
            }
            
            return redirect()->back();

        } catch (ValidationException $er) {
            return redirect()->back()->withErrors($er->validator->errors());
        }
    }

    public function destroy(Request $request){
        try
        {   
            Thread::where('id', $request->id)->delete();

            /*@TODO rimuoevere eventuali commenti*/

            return redirect()->back();

        }catch(ValidationException $er){
            return redirect()->back()->withErrors($er->validator->errors());
        }
    }
    
}
