<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('login_singup/login');
});
Route::get('/singup', function () {
    return view('login_singup/singup');
});


Route::get('/home', function () {
    return view('home');
});

Route::resource('/user', 'App\Http\Controllers\UserController');

// Route::get('/user/{param1}/{param2}', 'App\Http\Controllers\UserController@index');
// Route::get('/test','App\Http\Controllers\UserController@test');