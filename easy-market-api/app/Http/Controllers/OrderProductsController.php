<?php

namespace Http\Controllers;

include(__DIR__ . '/../../Models/Database.php');
include(__DIR__ . '/../../Models/OrderProducts.php');

use Models\OrderProducts;

class OrderProductsController
{
    public static function index($orderProducts)
    {
        return OrderProducts::all($orderProducts);
    }

    public static function store(array $data)
    {
        return OrderProducts::create($data);
    }

    public static function update(array $dice)
    {
        return OrderProducts::update($dice);
    }

    public static function destroy(array $dice)
    {
        return OrderProducts::delete($dice);
    }
}
