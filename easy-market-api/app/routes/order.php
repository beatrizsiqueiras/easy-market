<?php
include('../Http/Controllers/OrderController.php');

use Http\Controllers\OrderController;

require(__DIR__ . '/../Http/cors.php');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':

        if (!OrderController::index()) {
            http_response_code(400);
            echo "JSON decoding error.";
            exit;
        }
        http_response_code(200);
        echo json_encode(OrderController::index());

        break;
    case 'POST':

        $json_data = file_get_contents("php://input");

        $data = json_decode($json_data, true);

        if (!$data) {
            http_response_code(400);
            echo "JSON decoding error.";
            exit;
        }

        if (OrderController::store($data)) {
            http_response_code(200);
            echo json_encode(array('message' => 'New order inserted successfully.'));
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

        if (OrderController::update($data)) {
            http_response_code(200);
            echo json_encode(array('mensagem' => 'Order updated successfully.'));
        }
        http_response_code(200);

        break;
    case 'DELETE':

        $id = isset($_GET['id']) ? $_GET['id'] : null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(array('mensagem' => 'JSON decoding error.'));
            exit;
        }
        $orderId = array('id' => $id);

        if (OrderController::destroy($orderId)) {
            http_response_code(200);
            echo json_encode(array('mensagem' => 'Order deleted successfully.'));
        }
        http_response_code(200);
        break;
    default:
        echo "method unsupported";
        break;
}
