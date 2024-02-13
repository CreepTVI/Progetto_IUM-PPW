<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Association;
use \Conner\Tagging\Model\Tag;
use Illuminate\Support\Facades\Redirect;
use Auth;
use App\Models\User;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;

class AssociationController extends Controller
{
    /**
     * Display la pagina dell'associazione
     */
    public function edit(Request $request) {
        return view('association.edit', [
            'user' => Auth::user(), 
            'association' => $request->user()->association,
            'tags' => $request->user()->association->tags,
            'representative' => $request->user()->association ? User::find($request->user()->association->representative_id) : null,
            'association_photo' => $request->user()->association ? $request->user()->association->photo : null,
            'suggested' => Tag::suggested()->get()
        ]);
    }

    public function create(Request $request){
        try {  
            $data = $request->validate([
                'name' => [
                    'required',
                    'string',
                    'max:255',
                    Rule::unique('associations')
                ],
            ],[
                'name.unique' => 'Il nome dell\'associazione è già stato preso',
            ]);

            $data['description'] = $request->description;

            $association = Association::create([
                'name' => $data['name'],
                'description' => $data['description'],
                'representative_id' => Auth::user()->id,
                'photo' => $request->hasFile('photo') ? $request->file('photo')->store('public') : null,
            ]);

            if (!Auth::user()->hasRole('representative')) {
                Auth::user()->assignRole('representative');
                Auth::user()->update(['association_id' => $association->id]);
            }

            $request->session()->flash('success', 'Associazione creata!');
            return Redirect::route('association.edit');

        } catch (ValidationException $th) {
            return redirect()->back()->withErrors($th->validator->errors());
        }
    }

    public function update(Request $request) {
        if($request->user()->hasRole('representative')){
            try{
                $association = $request->user()->association;
                $tags = $association->tags;

                $request->validate([
                    'name' => [
                        'required',
                        'string',
                        'max:255',
                        Rule::unique('associations')->ignore($request->id)
                    ],
                ],[
                    'name.unique' => 'Il nome dell\'associazione è già stato preso',
                ]);

                $data = [
                    'name' => $request->name,
                    'description' => $request->description,
                ];

                if ($request->hasFile('photo')) {
                    $data['photo'] = $request->file('photo')->store('public');
                }

                if($request->tags){
                    foreach($tags as $tag){
                        if(!(in_array($tag->name, $request->tags) || in_array($tag->slug, $request->tags))){
                            $association->untag($tag->name);
                        }
                    }

                    foreach($request->tags as $tag){
                        $association->tag($tag);
                        $suggest = Tag::where('name',$tag)->first();
                        $suggest->suggest = true;
                        $suggest->save();
                    }
                }else{
                    $association->untag();
                }

                Association::where('id', $request->id)->update($data);
                return Redirect::route('association.edit');

            }catch(ValidationException $th){
                return redirect()->back()->withErrors($th->validator->errors());
            }
        }
        $request->session()->flash('error', "Non hai i permessi per modificare l'associazione");
        return redirect()->back();
    }

    public function destroy(Request $request){
        try
        {    
            $request->validateWithBag('userDeletion', [
                'password' => ['required', 'current_password'],
            ]);    

            Association::where('id', $request->id)->untag();

            Association::where('id', $request->id)->delete();

            $request->user()->removeRole('representative');

            return Redirect::route('association.edit');

        }catch(ValidationException $th){
            return redirect()->back()->withErrors($th->validator->errors());
        }
    }
}