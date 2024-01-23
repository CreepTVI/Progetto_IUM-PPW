<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'text'
    ];

    protected $hidden = [
        'id_thread',
        'id_user'
    ];

    protected $primaryKey = 'comment_id';

    protected $timestamps = true;
}
