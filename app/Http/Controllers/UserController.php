<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;


class UserController extends Controller
{

    public function store(Request $request) 
    {
       
        $user = User::create([
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
}
