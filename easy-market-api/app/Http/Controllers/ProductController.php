<?php

namespace Http\Controllers;

include(__DIR__ . '/../../Models/Product.php');

use Models\Product;

class ProductController
{
    public static function index()
    {
        return Product::all();
    }

    public function store()
    {
        return 'store products';
    }
}
