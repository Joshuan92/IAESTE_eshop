<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;


class UserController extends Controller
{

    public function store(Request $request) 
    {
        $user = User::create([
            'company_id'=>$request->company_id,
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>$request->password,
            'phone_number'=>$request->phone_number
        ])->save();


        return [
            'status' => 'success',
            'message' => 'The data was successfully saved on the server.'
     ];
    }

    public function index() {

        return User::query()
            ->orderBy('name', 'asc')
            ->limit(20)
            ->get();


    }

    public function findUser(Request $request) {
        
        $user = false;

        $user = User::where($request[0], '=', $request[1])
                            ->with('company')
                            ->first();

        if($user)
        {

            return $user;

        }
        else{
            
            return [
                'status' => 'fail',
                'message' => 'There is no registered user in our database with such a id.'
            ];

        }
    }

    public function update(Request $request, $id)
    {      
        $this->validate($request, [
            'name' => 'required|max:127',
            'email' => 'required|max:127',
            'contact_function' => 'required|max:127',
            'mailing_address' => 'required|max:127',
            'phone_number' => 'required|max:127'
        ]);

        $user = User::findOrFail($id);
        $user->name = $request->input('name');
        $user->email = $request->input('email');
        $user->contact_function = $request->input('contact_function');
        $user->mailing_address = $request->input('mailing_address');
        $user->phone_number = $request->input('phone_number');
        $user->save();

        return ['Update success'];
    }
    
}
