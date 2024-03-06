<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Laravel\Scout\Searchable;

class Thread extends Model
{
    use HasFactory, \Conner\Tagging\Taggable, Searchable;

    protected $fillable = [
        'title',
        'text',
        'photo',
        'pizza_type',
        'user_id',
    ];

    public function user():BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }
    
    public function toSearchableArray() : array {
        $array = $this->toArray();
        return $array;
    }
}
