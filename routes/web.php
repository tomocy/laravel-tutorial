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

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/posts', 'PostsController@index');
Route::get('/posts/{post}', 'PostsController@show')->name('post.show');

Route::post('/assignments', 'AssignmentController@store');
Route::put('/assignments/{assignment}', 'AssignmentController@update');

Route::get('/products', 'ProductController@index');
