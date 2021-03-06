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

Route::redirect('/', '/react');

Route::get('/{anything?}', function () {
    return view('welcome');
})->where('anything', '.*');

//Login routes
Auth::routes();

//logout
Auth::logout();
