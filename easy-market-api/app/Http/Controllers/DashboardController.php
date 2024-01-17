<?php

namespace Http\Controllers;

include(__DIR__ . '/../../Models/Database.php');
include(__DIR__ . '/../../Models/Dashboard.php');

use Models\Dashboard;

class DashboardController
{
    public static function indexProducts()
    {
        return Dashboard::totalProducts();
    }

    public static function indexCategories()
    {
        return Dashboard::totalCategories();
    }

    public static function indexOrders()
    {
        return Dashboard::totalOrders();
    }

    public static function indexOrdersChartData()
    {
        return Dashboard::ordersChartData();
    }
}
