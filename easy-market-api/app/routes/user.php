<?php
include('../Http/Controllers/UserController.php');

use Http\Controllers\UserController;


switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':

        if (!UserController::index()) {
            http_response_code(400);
            echo "JSON decoding error.";
            exit;
        }
        http_response_code(200);
        echo json_encode(UserController::index());

        break;
    case 'POST':

        $json_data = file_get_contents("php://input");

        $data = json_decode($json_data, true);

        if (!$data) {
            http_response_code(400);
            echo "JSON decoding error.";
            exit;
        }

        if (UserController::store($data)) {
            http_response_code(200);
            echo json_encode(array('message' => 'New user inserted successfully.'));
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

        if (UserController::update($data)) {
            http_response_code(200);
            echo json_encode(array('mensagem' => 'User updated successfully.'));
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

        if (UserController::destroy($data)) {
            http_response_code(200);
            echo json_encode(array('mensagem' => 'User deleted successfully.'));
        }
        http_response_code(200);
        break;
    default:
        echo "method unsupported";
        break;
}
