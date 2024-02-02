<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Representative extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $guard = 'representative';
    protected $fillable = [
        'email',
        'representative',
        'association',
        'password',
        'pizza_type'
    ];

    protected $hidden = [
        'password'
    ];

    protected $casts = [
        'password' => 'hashed',
    ];
}
