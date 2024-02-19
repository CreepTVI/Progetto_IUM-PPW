<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\Models\Thread;

class ThreadController extends Controller
{
    public function create(Request $request) {

        $validatedData = $request->validate([
            'text' => 'required|max:500',
            'pizza_type' => 'required',
            'photo' => 'file',
        ]);

        $thread = Thread::create([
            'text' => $validatedData['text'],
            'pizza_type' => $validatedData['pizza_type'],
            'photo' => $validatedData['photo'],

            
        ]);

        $request->session()->flash('success', 'Thread creato!');

        return Redirect::route('Thread.edit');
    }

    public function edit(Request $request) {

        $validatedData = $request->validate([
            'text' => 'required|max:500',
            'pizza_type' => 'required',
            'photo' => 'file',
        ]);
       
        $thread = Thread::edit([
            'text' => $validatedData['text'],
            'pizza_type' => $validatedData['pizza_type'],
            'photo' => $validatedData['photo'],
        ]);

        $request->session()->flash('success', 'Thread modificato!');

        return Redirect::route('Thread.edit');

    }
    
    
}
