<?php

namespace App\Http\Controllers;

use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        return view('product.index', [
            'products' => Product::all(),
        ]);
    }
}
