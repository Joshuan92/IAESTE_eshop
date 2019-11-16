<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;


class UserController extends Controller
{

    public function store(Request $request) 
    {
       
        $user = User::create([
            'first_name'=>$request->first_name,
            'last_name'=>$request->last_name,
            'email'=>$request->email,
            'password'=>$request->password,
            'phone_number'=>$request->phone_number
        ])->save();

        return [
            'status' => 'success',
            'message' => 'The data was successfully saved on the server.'
     ];
    }
}
