<?php

namespace App\Http\Controllers;

use App\Models\Association;
use App\Models\Thread;
use Illuminate\Http\Request;
use App\Models\User;
use \Conner\Tagging\Model\Tag;

class SearchController extends Controller
{
    public function search(Request $request){
    try{
        $user = User::search($request->search)->get();
        
        $association = Association::search($request->search)->get();
        
        // $thread = Thread::where('title','like','%'.$request->search.'%')->get();

        $tag = Tag::where('name','like','%'.$request->search.'%')->first();

        if($tag){
            $associationTemp = Association::withAnyTag($tag->name)->get();

            $association = $association->merge($associationTemp)->unique('id');
        }
        
        $data[] = [
            'users' => $user,
            'associations' => $association,
            // 'threads' => $thread
        ];

        return response()->json($data, 200);
    }
    catch(\Exception $e){
        return response()->json($e, 400);
    };
}
}