<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    use HasFactory;

    protected $fillable = [
        'text',
        'photo',
        'pizza_type'
    ];

    protected $hidden = [
        'creator_id',
        'representative_id'
    ];

    protected $primaryKey = 'thread_id';

    protected $timestamps = true;
}
