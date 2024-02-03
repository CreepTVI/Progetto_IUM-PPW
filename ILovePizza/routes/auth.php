<?php

use App\Http\Controllers\Auth\AuthenticatedSessionController;

use App\Http\Controllers\Auth\RegisteredUserController;

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\RepresentativeController;


Route::middleware('guest')->group(function () {

    // registrazione di un utente (user/representative)
    Route::post('/register', [RegisteredUserController::class, 'store'])->name('register');

    // login con creazione della sessione
    Route::get('/login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    // reindirizzamento
    Route::post('/login/owner', [AuthenticatedSessionController::class, 'store'])->name('users.login');

    // Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
    //             ->name('password.request');

    // Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
    //             ->name('password.email');

    // Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
    //             ->name('password.reset');

    // Route::post('reset-password', [NewPasswordController::class, 'store'])
    //             ->name('password.store');
});

Route::middleware('auth')->group(function () {

    // Reindirizzamento alla pagina di esplorazione degli utenti
    Route::get('/explore/thread', [UserController::class, 'index'])->name('user.dashboard');

    
//     Route::get('verify-email', EmailVerificationPromptController::class)
//                 ->name('verification.notice');

//     Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
//                 ->middleware(['signed', 'throttle:6,1'])
//                 ->name('verification.verify');

//     Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
//                 ->middleware('throttle:6,1')
//                 ->name('verification.send');

//     Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
//                 ->name('password.confirm');

//     Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

//     Route::put('password', [PasswordController::class, 'update'])->name('password.update');

//     Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
//                 ->name('logout');

    Route::post('/logout/user', [UserController::class, 'destroy'])->name('user.logout');
});

Route::middleware('representative')->group(function () {

    Route::post('/logout/representative', [RepresentativeController::class, 'destroy'])->name('representative.logout');

    // Reindirizzamento alla pagina di home degli utenti representative
    Route::get('/home', [RepresentativeController::class, 'index'])->name('representative.dashboard');
});

/*----------------- representative route -----------------*/

// Route::get('/login', [RepresentativeController::class, 'index'])->name('login');

// Route::post('/login/owner', [RepresentativeController::class, 'login'])->name('representative.login');
    
// Route::get('/home', [RepresentativeController::class, 'dashboard'])->name('representative.dashboard')->middleware('representative');

// Route::get('/explore/thread', [RepresentativeController::class, 'explore'])->name('user.dashboard')->middleware('auth');

// Route::post('/logout', [RepresentativeController::class, 'destroy'])->name('logout')->middleware('representative');

// Route::post('/register', [RepresentativeController::class, 'register'])->name('register');


/*----------------- fine representative route -----------------*/