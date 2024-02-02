<?php

use App\Http\Controllers\Controller;
use App\Http\Controllers\RepresentativeController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;

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

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/new/thread', function () {
    return view('newThread');
});

// Route::get('/home', function () {
//     return view('home');
// });

Route::get('/user', function () {
    return view('user');
});

// Route::get('/explore', function () {
//     return view('explore');
// });

// Route::get('/explore/thread', function () {
//     return view('thread');
// });

Route::prefix('thread')->group(function(){
    Route::get('/explore');
    Route::get('/new');
});



// Route::get('/user/{param1}/{param2}', 'App\Http\Controllers\UserController@index');
// Route::get('/test','App\Http\Controllers\UserController@test');