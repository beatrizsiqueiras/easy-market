<?php

namespace Models;

use PDOException;

date_default_timezone_set('America/Sao_Paulo');

class Product
{
    public static function all()
    {
        try {

            $dbConnection = Database::dbConnection();
            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }

            $sql = " SELECT P.ID,
                P.NAME AS PRODUCT,
                P.UNITARY_VALUE,
                P.AVAILABLE_QUANTITY,
                C.NAME AS CATEGORY,
                C.TAX_PERCENTAGE
            FROM PRODUCT P
            INNER JOIN CATEGORY C ON C.ID = P.CATEGORY";

            $products = pg_query($dbConnection, $sql);

            if (!$products) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            $products = pg_fetch_all($products);

            return $products;
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

            $inserted = pg_insert($dbConnection, "product", $data);

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

    public static function update(array $data)
    {
        try {

            $conditions = $data['conditions'];
            $attributes = $data['data'];

            $attributes['updated_at'] = date('Y-m-d H:i:s', time());

            $dbConnection = Database::dbConnection();

            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }

            $updated = pg_update($dbConnection, 'product', $attributes, $conditions);

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

            $deleted = pg_update($dbConnection, 'product', $data, $conditions);

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
