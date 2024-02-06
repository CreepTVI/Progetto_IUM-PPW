<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Thread extends Model
{
    use HasFactory;

    protected $fillable = [
        'text',
        'photo',
        'pizza_type'
    ];

    protected $hidden = [
        'user_id',
    ];


    protected $timestamps = true;

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
