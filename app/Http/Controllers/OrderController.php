<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderComplete;

class OrderController extends Controller
{
    public function sendEmail(): void 
    {

        $user = new User(['name' => 'John Doe', 'email' => 'john@doe.com']);

        Mail::to('pedro@gonzales.com')->send(new OrderComplete($user));
    }
}