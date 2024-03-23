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
use Illuminate\Support\Facades\Mail;
use App\Mail\JoinAssociation;

class AssociationController extends Controller
{
    /**
     * Display la pagina dell'associazione
     */
    public function edit(Request $request) {
        return view('association.edit', [
            'user' => Auth::user(), 
            'association' => $request->user()->association,
            'tags' => $request->user()->association ? $request->user()->association->tags : null,
            'representative' => $request->user()->association ? User::find($request->user()->association->representative_id) : null,
            'association_photo' => $request->user()->association ? $request->user()->association->photo : null,
            'suggested' => Tag::suggested()->get()
        ]);
    }

    public function create(Request $request){
        try {  
            $dataValidate = $request->validate([
                'name' => ['required','string','max:255','min:3', Rule::unique('associations')->ignore($request->id)],
                'photo' => 'file',
                'description' =>['max:500'],
            ]);


            $association = Association::create([
                'name' => $dataValidate['name'],
                'description' => $dataValidate['description'],
                'representative_id' => Auth::user()->id,
                'photo' => $request->hasFile('photo') ? $request->file('photo')->store('public') : null,
            ]);

            if (!Auth::user()->hasRole('representative')) {
                Auth::user()->assignRole('representative');
                Auth::user()->update(['association_id' => $association->id]);
            }

            $request->session()->flash('success', __('general.association_created'));
            return Redirect::route('association.edit');

        } catch (ValidationException $th) {
            return redirect()->back()->withErrors($th->validator->errors());
        }
    }

    public function update(Request $request) {

        if(Auth::user()->hasRole('representative')){
            try{
                $association = $request->user()->association;
                $tags = $association->tags;

                $dataValidate = $request->validate([
                    'name' => ['required','string','max:255','min:3', Rule::unique('associations')->ignore($request->id)],
                    'photo' => 'file',
                    'description' =>['max:500'],
                ]);
                
                $data = [
                    'name' => $dataValidate['name'],
                    'description' => $dataValidate['description'],
                ];

                if ($request->hasFile('photo')) {
                    if ($association->photo) {
                        $img = public_path().'/storage/'.basename($association->photo);
                        file_exists($img) ? unlink($img) : null;
                        $data['photo'] = $dataValidate['photo']->store('public');
                    }else{
                        $data['photo'] = $dataValidate['photo']->store('public');;
                    }
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
                Association::find($request->id)->searchable();

                $request->session()->flash('success', __('general.association_updated'));

                return Redirect::route('association.edit');

            }catch(ValidationException $th){
                return redirect()->back()->withErrors($th->validator->errors());
            }
        }
        $request->session()->flash('error', __('general.permission_denied_upd_association'));
        return redirect()->back();
    }

    public function destroy(Request $request){
        try
        {    
            $request->validateWithBag('userDeletion', [
                'password' => ['required', 'current_password'],
            ]);    

            $association = Association::find($request->id);

            $association->untag();

            if($association->photo){
                $img = public_path().'/storage/'.basename($association->photo);
                file_exists($img) ? unlink($img) : null;
            }

            $association->delete();

            $request->user()->removeRole('representative');

            $request->session()->flash('success', __('general.association_deleted'));

            return Redirect::route('association.edit');

        }catch(ValidationException $th){
            return redirect()->back()->withErrors($th->validator->errors());
        }
    }
    
    public function send(Request $request) {
        try{

            $user_list_ids = $request->selected_users;

            $association = Association::find($request->association_id); 
            foreach($user_list_ids as $id){

                $user = User::find($id);

                if($user)
                    Mail::to($user->email)->send(new JoinAssociation($association, $user));
            }

    
            $request->session()->flash('success', __('general.users_invited'));
        }catch(\Exception $th){
            $request->session()->flash('error', __('general.generic_error'));
        }
        
        return redirect()->back();
    }

    public function left(Request $request) {
        try{
            $request->validateWithBag('userDeletion', [
                'password' => ['required', 'current_password'],
            ]);   

            $user = Auth::user();
            $user->update(['association_id' => null]);

            return redirect()->back()->with('success', __('general.left_association'));

        }catch(ValidationException $th){
            return redirect()->back()->withErrors($th->validator->errors());
        }
    }

    public function getAssociation($id) {
        $association = Association::find($id);
        $representative = User::find($association->representative_id);
        return view('association.edit', [
            'association' => $association,
            'tags' => $association->tags ? $association->tags : null,
            'association_photo' => $association->photo ? $association->photo : null,
            'representative' => $representative,
            'user' => Auth::user(),
            'suggested' => Tag::suggested()->get()
        ]);
    }
}