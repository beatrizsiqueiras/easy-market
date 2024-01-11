<?php

namespace Models;

use PDOException;

date_default_timezone_set('America/Sao_Paulo');

class Category
{

    public static function all()
    {
        try {

            $dbConnection = Database::dbConnection();
            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }

            $categories = pg_query($dbConnection, "SELECT * FROM category");

            if (!$categories) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            $categories = pg_fetch_all($categories);

            return $categories;
        } catch (PDOException $e) {
            echo "Erro de conexão: " . $e->getMessage();
        } finally {
            if ($dbConnection !== null) {
                pg_close($dbConnection);
            }
        }
    }

    public static function create(array $data)
    {
        try {

            $dbConnection = Database::dbConnection();
            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }

            $data['created_at'] = date('Y-m-d H:i:s', time());

            $inserted = pg_insert($dbConnection, "category", $data);

            if (!$inserted) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            return $inserted;
        } catch (PDOException $e) {
            echo "Erro de conexão: " . $e->getMessage();
        } finally {
            if ($dbConnection !== null) {
                pg_close($dbConnection);
            }
        }
    }

    public static function update(array $dice)
    {
        try {

            $conditions = $dice['conditions'];
            $data = $dice['data'];

            $data['updated_at'] = date('Y-m-d H:i:s', time());

            $dbConnection = Database::dbConnection();

            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }

            $updated = pg_update($dbConnection, 'category', $data, $conditions);

            if (!$updated) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            return $updated;
        } catch (PDOException $e) {
            echo "Erro de conexão: " . $e->getMessage();
        } finally {
            if ($dbConnection !== null) {
                pg_close($dbConnection);
            }
        }
    }

    public static function delete(array $conditions)
    {
        try {
            $dbConnection = Database::dbConnection();

            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }

            $data =  array("deleted_at" => date('Y-m-d H:i:s', time()));

            $deleted = pg_update($dbConnection, 'category', $data, $conditions);

            if (!$deleted) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            return $deleted;
        } catch (PDOException $e) {
            echo "Erro de conexão: " . $e->getMessage();
        } finally {
            if ($dbConnection !== null) {
                pg_close($dbConnection);
            }
        }
    }
}
