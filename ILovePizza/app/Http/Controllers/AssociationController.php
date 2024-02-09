<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AssociationController extends Controller
{
    /**
     * Display la pagina dell'associazione
     */
    public function edit(Request $request) {
        return view('association.edit', [
            'user' => $request->user(), 
            'association' => $request->user()->association
        ]);
    }
}
