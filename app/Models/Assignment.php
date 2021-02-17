<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
