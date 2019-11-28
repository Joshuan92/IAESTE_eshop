<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['auth:api']], function ($group) {
 
    Route::get('/user', 'Api\UserController@index');
 
});



Route::get('/user', 'CompanyController@index');

Route::post('/findCompany', 'CompanyController@findCompany');

Route::post('/findUser', 'UserController@findUSer');

Route::post('/company', 'CompanyController@store');

Route::post('/user-create', 'UserController@store');

Route::get('/projects', 'ProjectController@index');

Route::post('/updateUser/{id}', 'UserController@update');

Route::post('/updateCompany/{id}', 'CompanyController@update');

Route::get('/sendemail', 'SendEmailController@index');

Route::post('/sendemail/send', 'SendEmailController@send');

