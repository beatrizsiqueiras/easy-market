<?php

namespace Http\Controllers;

include(__DIR__ . '/../../Models/Database.php');
include(__DIR__ . '/../../Models/Product.php');
include(__DIR__ . '/../../Models/Category.php');

use Models\Category;
use Models\Product;
use Models\Database;

class ProductController
{
    public static function index()
    {
        var_dump(Category::all());
        return;
    }

    public function store()
    {
        return 'store products';
    }
}
