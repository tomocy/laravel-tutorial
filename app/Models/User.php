<?php

namespace App\Models;

use App\Notifications\AssignmentAssigned;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function assignAssignment($assignment)
    {
        $assignment = $this->assignments()->create($assignment);
        $this->notify(new AssignmentAssigned($assignment));
        return $assignment;
    }

    public function assignRole($role)
    {
        if (is_string($role)) {
            $role = Role::whereName($role)->firstOrFail();
        }
        $this->roles()->syncWithoutDetaching($role);
    }

    public function hasAbility($ability)
    {
        if (is_a($ability, Ability::class)) {
            $ability = $ability->name;
        }
        return $this->abilityNames()->contains($ability);
    }

    public function abilityNames()
    {
        return $this->abilities()->pluck('name');
    }

    public function abilities()
    {
        return $this->roles->map->abilities->flatten()->unique();
    }

    public function assignments()
    {
        return $this->hasMany(Assignment::class, 'assignee_id');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class)->withTimestamps();
    }
}
