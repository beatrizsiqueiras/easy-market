<?php

namespace Http\Controllers;

include(__DIR__ . '/../../Models/Database.php');
include(__DIR__ . '/../../Models/Product.php');

use Models\Product;

class ProductController
{
    public static function index()
    {
        return Product::all();
    }

    public static function store(array $data)
    {
        return Product::create($data);
    }

    public static function update(array $data)
    {
        return Product::update($data);
    }

    public static function destroy(array $data)
    {
        return Product::delete($data);
    }
}
