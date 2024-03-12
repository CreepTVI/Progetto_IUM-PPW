<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ThreadController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AssociationController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ExploreController;
use App\Http\Controllers\SearchController;

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

Route::get('/home', function () {
    return view('home');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth','checkMemberRole'])->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    Route::get('/user/get/{id}', [UserController::class, 'getUser'])->name('users.index');
    Route::get('/user/list', [UserController::class, 'list'])->name('users.list');

    Route::get('/association/get/{id}', [AssociationController::class, 'getAssociation'])->name('associations.index');
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

    Route::get('/search',[SearchController::class, 'search'])->name('search');

    Route::get('/post/show/{id}', [ThreadController::class, 'getThread'])->name('thread.show');
    Route::get('/post/show', [ThreadController::class, 'list'])->name('thread.list');
    Route::get('/post/new', [ThreadController::class, 'serve'])->name('thread.new');
    Route::post('/post/new', [ThreadController::class, 'create'])->name('thread.new.create');
    Route::delete('/post/delete', [ThreadController::class, 'destroy'])->name('thread.delete');
    Route::post('/post/update/likes/{id}', [ThreadController::class, 'addRemoveLike'])->name('thread.update.like');
    Route::get('/post/get/likes/{id}', [ThreadController::class, 'getLikes'])->name('thread.get.likes');
    Route::get('/post/get/comments/{id}', [ThreadController::class, 'getComments'])->name('thread.get.comments');
    Route::post('/post/add/comment/{id}', [ThreadController::class, 'addComment'])->name('thread.add.comment');
    Route::get('/mark-notification/{notification_id}/{thread_id}', [ThreadController::class, 'markNotificationsAsRead'])->name('mark-notification');
});

require __DIR__.'/auth.php';
