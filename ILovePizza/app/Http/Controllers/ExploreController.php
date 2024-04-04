<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExploreController extends Controller
{
    public function serve(Request $request){
        return view('explore', [
            'threads' => ThreadController::list($request),
        ]);
    }
}
