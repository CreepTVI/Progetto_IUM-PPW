<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Association extends Model
{
    use HasFactory, \Conner\Tagging\Taggable;

     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'photo',
        'representative_id'
    ];
    public function members(){
        return $this->hasMany(User::class);
    }

    public function representative(){
        return $this->belongsTo(User::class);
    }
}
