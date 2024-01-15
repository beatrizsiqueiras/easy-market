<?php

namespace Http\Controllers;

include(__DIR__ . '/../../Models/Database.php');
include(__DIR__ . '/../../Models/User.php');

use Models\User;
use Models\Database;
use PDOException;

class UserController
{
    public static function index()
    {
        return User::all();
    }

    public static function store(array $data)
    {
        return User::create($data);
    }

    public static function update(array $data)
    {
        return User::update($data);
    }

    public static function destroy(array $data)
    {
        return User::delete($data);
    }

    public static function login(array $data)
    {
        try {
            $password = $data['password'];
            $conditions = array("login" => $data['login']);
            $dbConnection = Database::dbConnection();

            $user = pg_select($dbConnection, 'user', $conditions)[0];

            if (empty($user)) {
                http_response_code(400);
                echo json_encode("user-not-found");
                exit;
            }
            if (!password_verify($password, $user['password'])) {
                http_response_code(400);
                echo json_encode("wrong-password");
                exit;
            }

            $values = array('token' => base64_encode(random_bytes(32)));

            pg_update($dbConnection, 'user', $values, $user);

            http_response_code(200);
            echo json_encode($user);
        } catch (PDOException $e) {
            echo "Erro de conexão: " . $e->getMessage();
        } finally {
            if ($dbConnection !== null) {
                pg_close($dbConnection);
            }
        }
    }
}
