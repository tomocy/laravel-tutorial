<?php

namespace App\Models;

use App\Models\User;
use App\Models\Tag;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Gate;

class Assignment extends Model
{
    use HasFactory;

    protected $fillable = ['body'];

    public function complete()
    {
        if ($this->completed) {
            return;
        }
        $this->completed = true;
        $this->save();
    }

    public function isAssignedTo(User $user)
    {
        return $this->assignee->is($user);
    }

    public function assignee()
    {
        return $this->belongsTo(User::class);
    }

    public function tags()
    {
        return $this->belongsToMany(Tag::class)->withTimestamps();
    }
}
