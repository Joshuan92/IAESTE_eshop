<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Str;


class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
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
