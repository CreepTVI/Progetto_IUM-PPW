<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    public function list(Request $request){

        $data = User::where('id', '!=', $request->user()->id )->get();

        return response()->json($data, 200);
    }

    public function becomeMember($associationId, $userId){
        try{
            $user = User::find($userId);
 
            if(!$user->hasRole('member'))
                $user->assignRole('member');
    
            $user->association_id = $associationId;
            $user->save();

        }catch(\Throwable $th){

        }
        return redirect()->route('association.edit');
    }
}
