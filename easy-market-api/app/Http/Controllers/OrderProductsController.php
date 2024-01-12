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

    public static function update(array $data)
    {
        return OrderProducts::update($data);
    }

    public static function destroy(array $data)
    {
        return OrderProducts::delete($data);
    }
}
