<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function list(Request $request){
        $data = User::where('id', '!=', $request->user()->id )
                ->where('association_id', '=', null)
                ->get();

        return response()->json($data, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
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

    public function getUser($id){
        $user = User::find($id);
        return view('profile.edit',[
            'user' => $user
        ]);
    }
}
