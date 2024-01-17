<?php
include('../Http/Controllers/CategoryController.php');

use Http\Controllers\CategoryController;

require(__DIR__ . '/../Http/cors.php');

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':

        if (!CategoryController::index()) {
            http_response_code(400);
            echo "JSON decoding error.";
            exit;
        }
        http_response_code(200);
        echo json_encode(CategoryController::index());
        
        break;
    case 'POST':

        $json_data = file_get_contents("php://input");

        $data = json_decode($json_data, true);

        if (!$data) {
            http_response_code(400);
            echo "JSON decoding error.";
            exit;
        }

        if (CategoryController::store($data)) {
            http_response_code(200);
            echo json_encode(array('message' => 'New category inserted successfully.'));
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

        if (CategoryController::update($data)) {
            http_response_code(200);
            echo json_encode(array('mensagem' => 'Category updated successfully.'));
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

        if (CategoryController::destroy($data)) {
            http_response_code(200);
            echo json_encode(array('mensagem' => 'Category deleted successfully.'));
        }
        http_response_code(200);
        break;
    default:
        echo "method unsupported";
        break;
}
