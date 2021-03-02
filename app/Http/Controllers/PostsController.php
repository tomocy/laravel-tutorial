<?php

namespace App\Http\Controllers;

use App\Models\Post;

class PostsController extends Controller
{
    public function index()
    {
        return view('post.index', [
            'posts' => Post::all(),
        ]);
    }

    public function show(Post $post)
    {
        return view('post.show', compact('post'));
    }
}
