<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
*/

Route::get('/react/{anything?}', function () {
    return view('welcome');
})->where('anything', '.*');

Route::get('/user', 'CompanyController@index');

Route::post('/company', 'CompanyController@store');

Route::post('/user-create', 'UserController@store');

Route::get('/projects', 'ProjectController@index');
