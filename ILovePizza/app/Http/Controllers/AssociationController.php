<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \Conner\Tagging\Model\Tag;

class AssociationController extends Controller
{
    /**
     * Display la pagina dell'associazione
     */
    public function edit(Request $request) {
        return view('association.edit', [
            'user' => $request->user(), 
            'association' => $request->user()->association,
            'tags' => Tag::where('suggest', true)->get()
        ]);
    }

    public function create(Request $request){
        dd($request->all());

        // $data = $request

        // if(!Auth::user()->hasRole('representative'))
        //         Auth::user()->assignRole('representative');
        
        // $request->session()->flash('success', 'Associazione creata!');
        return Redirect::route('association.edit');
    }


}
