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
        'creator_id',
        'representative_id'
    ];

    protected $primaryKey = 'thread_id';

    protected $timestamps = true;

    public function representative():BelongsTo
    {
        return $this->belongsTo(Representative::class, 'representative_id');
    }
}
