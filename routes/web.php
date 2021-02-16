<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return [
        'name' => request('name'),
    ];
});

Route::get('/posts/{post}', function ($post) {
    $posts = [
        'aaa' => 'AAAAA',
        'zzz' => 'ZZZZZ',
    ];

    if (!array_key_exists($post, $posts)) {
        abort(404);
    }
    return [
        'contents' => $posts[$post],
    ];
});
