<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UserController extends Controller
{
    public function index($name, $email){

        $model = [
            'name'=> $name,
            'email'=> $email,
        ];

        return view('user', $model);
    }
    public function test(Request $request){
        $all = $request->all();
        var_dump( $all );
    }
}
