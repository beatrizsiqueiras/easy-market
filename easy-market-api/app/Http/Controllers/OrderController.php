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

    public static function update(array $dice)
    {
        return Order::update($dice);
    }

    public static function destroy(array $dice)
    {
        return Order::delete($dice);
    }
}
