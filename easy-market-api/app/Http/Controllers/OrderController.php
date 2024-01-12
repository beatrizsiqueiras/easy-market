<?php

namespace Http\Controllers;

include(__DIR__ . '/../../Models/Database.php');
include(__DIR__ . '/../../Models/Order.php');

use Models\Order;

class OrderController
{
    public static function index()
    {
        return Order::all();
    }

    public static function store(array $data)
    {
        return Order::create($data);
    }

    public static function update(array $data)
    {
        return Order::update($data);
    }

    public static function destroy(array $data)
    {
        return Order::delete($data);
    }
}
