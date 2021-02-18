<?php

namespace App\Http\Controllers;

use App\Models\Assignment;
use Illuminate\Http\Request;

class AssignmentController extends Controller
{
    public function store()
    {
        Assignment::create($this->validateAssignment());
    }

    public function update(Assignment $assignment)
    {
        $assignment->update($this->validateAssignment());
    }

    private function validateAssignment()
    {
        return request()->validate([
            'body' => ['required'],
            'tags' => ['exists:tags,id']
        ]);
    }
}
