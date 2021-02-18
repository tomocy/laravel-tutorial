<?php

namespace App\Models;

use App\Models\User;
use App\Models\Ability;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    public function allowTo($ability)
    {
        if (is_string($ability)) {
            $ability = Ability::whereName($ability)->firstOrFail();
        }
        $this->abilities()->syncWithoutDetaching($ability);
    }

    public function users()
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }

    public function abilities()
    {
        return $this->belongsToMany(Ability::class)->withTimestamps();
    }
}
