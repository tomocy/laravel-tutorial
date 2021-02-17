<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Assignment extends Model
{
    use HasFactory;

    public function complete()
    {
        if ($this->completed) {
            return;
        }

        $this->completed = true;
        $this->save();
    }

    public function assignee()
    {
        return $this->belongsTo(User::class);
    }
}
