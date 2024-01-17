<?php
include('../Http/Controllers/DashboardController.php');

use Http\Controllers\DashboardController;

require(__DIR__ . '/../Http/cors.php');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        $action = $_GET['action'];

        switch ($action) {
            case 'products':

                if (!DashboardController::indexProducts()) {
                    http_response_code(400);
                    echo "JSON decoding error.";
                    exit;
                }
                http_response_code(200);
                echo json_encode(DashboardController::indexProducts());

                break;
            case 'categories':

                if (!DashboardController::indexCategories()) {
                    http_response_code(400);
                    echo "JSON decoding error.";
                    exit;
                }
                http_response_code(200);
                echo json_encode(DashboardController::indexCategories());

                break;
            case 'orders':

                if (!DashboardController::indexOrders()) {
                    http_response_code(400);
                    echo "JSON decoding error.";
                    exit;
                }
                http_response_code(200);
                echo json_encode(DashboardController::indexOrders());

                break;
            case 'orderChart':
                if (!DashboardController::indexOrdersChartData()) {
                    http_response_code(400);
                    echo "JSON decoding error.";
                    exit;
                }
                http_response_code(200);
                echo json_encode(DashboardController::indexOrdersChartData());

                break;
            default:
                echo "ACTION NOT ALLOWED";
                break;
        }
        break;
    default:
        echo "method unsupported";
        break;
}
