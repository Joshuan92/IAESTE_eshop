<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\Mail\TestEmail;
use Illuminate\Support\Facades\Mail;

class SendEmailController extends Controller
{
    public function index() 
    {
        $name = 'Michal';
        $email = 'michal@gazdik.com';

        Mail::to($user_email)->send(new TestEmail($user_name));
        }

    public function send(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            
        ]);
    }
    
    public function sendEmail(Request $request): void 
    {
        $user = Auth::user();
        $order_id = $request->input('order_id');
        $order = Order::findOrFail($order_id);

        Mail::to($user->email)->send(new Invoice($user, $order));

        
    }
}