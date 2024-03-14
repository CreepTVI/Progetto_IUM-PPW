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
        $user = User::search($request->search)->get()->values();
        
        $association = Association::search($request->search)->get()->values();
        
        $thread = Thread::search($request->search)->get()->values();

        $tag = Tag::where('name','like','%'.$request->search.'%')->first();

        if($tag){
            $associationTemp = Association::withAnyTag($tag->name)->get();
            $association = $association->merge($associationTemp)->unique('id');

            $threadTemp = Thread::withAnyTag($tag->name)->get();
            $thread = $thread->merge($threadTemp)->unique('id');
        }
        
        $data[] = [
            'users' => $user,
            'associations' => $association,
            'threads' => $thread
        ];

        return response()->json($data, 200);
    }
    catch(\Exception $e){
        return response()->json($e, 400);
    };
}
}