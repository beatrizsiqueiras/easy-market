<?php

namespace Http\Controllers;

include(__DIR__ . '/../../Models/Database.php');
include(__DIR__ . '/../../Models/Category.php');

use Models\Category;

class CategoryController
{
    public static function index()
    {
        return Category::all();
    }

    public static function store(array $data)
    {
        return Category::create($data);
    }

    public static function update(array $data)
    {
        return Category::update($data);
    }

    public static function destroy(array $data)
    {
        return Category::delete($data);
    }
}
