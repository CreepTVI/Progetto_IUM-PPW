<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Representative extends Model
{
    use HasFactory;

    protected $fillable = [
        'email',
        'representative_name',
        'association_name',
        'pizza_type'
    ];

    protected $hidden = [
        'password'
    ];

    protected $primaryKey = 'representative_id';
}
