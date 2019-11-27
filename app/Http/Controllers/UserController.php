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
}
