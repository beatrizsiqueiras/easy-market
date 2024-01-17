<?php
include('../Http/Controllers/ProductController.php');


use Http\Controllers\ProductController;

require(__DIR__ . '/../Http/cors.php');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':

        if (!ProductController::index()) {
            http_response_code(400);
            echo "JSON decoding error.";
            exit;
        }
        http_response_code(200);
        echo json_encode(ProductController::index());

        break;

    case 'POST':
        $json_data = file_get_contents("php://input");
        $data = json_decode($json_data, true);

        if (!$data) {
            http_response_code(400);

            echo "JSON decoding error.";
            exit;
        }

        if (ProductController::store($data)) {
            http_response_code(200);

            echo json_encode(array('message' => 'New product inserted successfully.'));
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

        if (ProductController::update($data)) {
            http_response_code(200);

            echo json_encode(array('mensagem' => 'Product updated successfully.'));
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

        $productId = array('id' => $id);

        if (ProductController::destroy($productId)) {
            http_response_code(200);

            echo json_encode(array('mensagem' => 'Product deleted successfully.'));
        }

        http_response_code(200);
        break;

    default:
        http_response_code(401);

        echo "method unsupported";
        break;
}
