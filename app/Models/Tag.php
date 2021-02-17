<?php

namespace App\Models;

use App\Models\Assignment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    public function assignments()
    {
        return $this->belongsToMany(Assignment::class)->withTimestamps();
    }
}
