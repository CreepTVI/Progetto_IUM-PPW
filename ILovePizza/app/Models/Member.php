<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'password'
    ];

    protected $hidden = [
        'password',
        'moderator',
        'representative_id'
    ];

    protected $primaryKey = 'member_id';

    protected $timestamps = true;
}
