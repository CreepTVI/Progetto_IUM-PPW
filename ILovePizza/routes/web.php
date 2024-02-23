<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AssociationController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ExploreController;

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

Route::middleware(['auth','checkMemberRole'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/user/list', [UserController::class, 'list'])->name('users.list');
    Route::get('/new-member/{associationId}/{userId}', [UserController::class, 'becomeMember'])->name('new.member');
});

Route::middleware(['auth','checkMemberRole'])->group(function (){
    Route::get('/association', [AssociationController::class, 'edit'])->name('association.edit');
    Route::patch('/association', [AssociationController::class, 'update'])->name('association.update');
    Route::post('/association/create', [AssociationController::class, 'create'])->name('association.create');
    Route::delete('/association', [AssociationController::class, 'destroy'])->name('association.destroy');
    Route::post('/association/send', [AssociationController::class, 'send'])->name('association.send');
    Route::post('/association/left', [AssociationController::class, 'left'])->name('association.left');

    Route::get('/home', [HomeController::class, 'serve'])->name('home');
    
    Route::get('/explore', [ExploreController::class, 'serve'])->name('explore');
    
});

Route::get('/post', function() {
    return view('newThread');
});

require __DIR__.'/auth.php';
