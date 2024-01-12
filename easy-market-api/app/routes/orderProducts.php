<?php
include('../Http/Controllers/OrderProductsController.php');

use Http\Controllers\OrderProductsController;


switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':

        $json_data = file_get_contents("php://input");

        $order = json_decode($json_data, true)['order'];

        if (!OrderProductsController::index($order)) {
            http_response_code(400);
            echo "JSON decoding error.";
            exit;
        }
        http_response_code(200);
        echo json_encode(OrderProductsController::index($order));

        break;
    case 'POST':

        $json_data = file_get_contents("php://input");

        $data = json_decode($json_data, true);
        
        if (!$data) {
            http_response_code(400);
            echo "JSON decoding error.";
            exit;
        }

        if (OrderProductsController::store($data)) {
            http_response_code(200);
            echo json_encode(array('message' => 'Successfully registered order products.'));
        }

        break;
    case 'PUT':

        $json_data = file_get_contents("php://input");
        $data = json_decode($json_data, true);

        if (!$data) {
            http_response_code(400);
            echo json_encode(array('mensagem' => 'JSON decoding error.'));
            exit;
        }

        if (OrderProductsController::update($data)) {
            http_response_code(200);
            echo json_encode(array('mensagem' => 'Order product updated successfully.'));
        }
        http_response_code(200);

        break;
    case 'DELETE':

        $json_data = file_get_contents("php://input");
        $data = json_decode($json_data, true);

        if (!$data) {
            http_response_code(400);
            echo json_encode(array('mensagem' => 'JSON decoding error.'));
            exit;
        }

        if (OrderProductsController::destroy($data)) {
            http_response_code(200);
            echo json_encode(array('mensagem' => 'Order product deleted successfully.'));
        }
        http_response_code(200);
        break;
    default:
        echo "method unsupported";
        break;
}
