<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Illuminate\Auth\Events\Registered;
// use Illuminate\Notifications\Notifiable;
// use App\Notifications\UserRegistered;

use Illuminate\Support\Str;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
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
        //$this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
            'mailing_address' => ['required', 'string', 'max:255'],
            'phone_number' => ['required', 'string', 'max:255'],
            'company_identification_number' => ['required', 'string', 'max:255'],
            'contact_function' => ['required', 'string', 'max:255']       
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
    
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'company_id' => $data['company_id'],
            'phone_number' => $data['phone_number'],
            'contact_function' => $data['contact_function'],
            'mailing_address' => $data['mailing_address'],
            'password' => Hash::make($data['password']),

        ]);
        
    }

    public function register(Request $request)
    {
        
        $this->validator($request->all())->validate();

        //event(new Registered();
        $user = $this->create($request->all());

        $token = Str::random(80);
    
        $user->forceFill([
            'api_token' => hash('sha256', $token),
            
        ])->save();

        $this->guard()->login($user);

        // $user->notify(new UserRegistered($user->name));
        return [
                    "registered" => true,
                    "user_id" => $user->id,
                    'data' => [
                        'token' => $token
                    ]
                ];
    }
}
