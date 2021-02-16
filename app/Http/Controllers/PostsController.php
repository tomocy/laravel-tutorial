<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostsController extends Controller
{
    private static $posts = [
        'aaa' => 'Aiueo',
        'zzz' => 'Sleepy',
    ];

    public function show($post)
    {
        if (!array_key_exists($post, self::$posts)) {
            abort(404);
        }
        return [
            'contents' => self::$posts[$post],
        ];
    }
}
