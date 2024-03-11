<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Laravel\Scout\Searchable;
use \Conner\Tagging\Taggable;
use \Conner\Likeable\Likeable;
use BeyondCode\Comments\Traits\HasComments;
use BeyondCode\Comments\Comment;

class Thread extends Model
{
    use HasFactory, Taggable, Searchable, Likeable, HasComments;

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

    public function deleteComments()
    {
        // Elimina tutti i commenti associati a questo post
        Comment::where('commentable_type', get_class($this))
            ->where('commentable_id', $this->id)
            ->delete();
    }   
}
