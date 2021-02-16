<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostsController extends Controller
{
    public function show($slug)
    {
        return [
            'body' => Post::where('slug', $slug)->firstOrFail()->body,
        ];
    }
}
