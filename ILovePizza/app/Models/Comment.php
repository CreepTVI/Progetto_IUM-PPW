<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = [
        'text'
    ];

    protected $hidden = [
        'thread_id',
        'user_id',
        'member_id',
        'representative_id'
    ];

    public function thread():BelongsTo
    {
        return $this->belongsTo(Thread::class, 'thread_id');
    }

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function member():BelongsTo
    {
        return $this->belongsTo(Member::class, 'member_id');
    }

    public function representative():BelongsTo
    {
        return $this->belongsTo(Representative::class, 'representative_id');
    }
}
