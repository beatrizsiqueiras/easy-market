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

    public static function update(array $dice)
    {
        return Category::update($dice);
    }

    public static function destroy(array $dice)
    {
        return Category::delete($dice);
    }
}
