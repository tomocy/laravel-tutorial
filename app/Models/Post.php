<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $appends = ['url'];

    public function getUrlAttribute()
    {
        return route('post.show', ['post' => $this->id]);
    }
}
