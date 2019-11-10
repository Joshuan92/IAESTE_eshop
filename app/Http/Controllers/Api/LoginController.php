<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    use AuthenticatesUsers;
 
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
    
    protected function sendFailedLoginResponse(Request $request)
    {
        return [
            'status' => 'fail',
            'message' => 'Wrong login credentials',
            'data' => []
        ];
    }
    
    protected function sendLoginResponse(Request $request)
    {
        $token = Str::random(80);
    
        $this->guard()->user()->forceFill([
            'api_token' => hash('sha256', $token),
        ])->save();
    
        return [
            'status' => 'success',
            'message' => 'Login successful',
            'data' => [
                'token' => $token
            ]
        ];
    }
    
    protected function loggedOut(Request $request)
    {
        return [
            'status' => 'fail',
            'message' => 'Successfully logged out',
            'data' => []
        ];
    }
}
