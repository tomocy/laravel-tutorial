<?php

namespace App\Http\Controllers;

use App\Models;
use Illuminate\Http\Request;

class AssignmentController extends Controller
{
    public function store(Article $article)
    {
        Article::create($this->validateAssignment());
    }

    public function update(Article $article)
    {
        $article->update($this->validateAssignment());
    }

    private function validateAssignment()
    {
        return request()->validate([
            'body' => ['required'],
        ]);
    }
}
