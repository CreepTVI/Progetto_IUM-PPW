<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    public function representative():BelongsTo
    {
        return $this->belongsTo(Representative::class, 'representative_id');
    }
}
