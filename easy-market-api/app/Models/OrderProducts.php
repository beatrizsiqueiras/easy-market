<?php

namespace Models;

use PDOException;

date_default_timezone_set('America/Sao_Paulo');

class OrderProducts
{

    public static function all($order)
    {
        try {

            $dbConnection = Database::dbConnection();
            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }
            $sql = "SELECT P.ID,
                    P.NAME,
                    OP.QUANTITY,
                    P.UNITARY_VALUE,
                    C.TAX_PERCENTAGE
                FROM ORDER_PRODUCTS AS OP
                INNER JOIN PRODUCT AS P ON OP.PRODUCT = P.ID
                INNER JOIN CATEGORY AS C ON P.CATEGORY = C.ID
                WHERE OP.ORDER = $order
                    AND OP.DELETED_AT IS NULL
                    ORDER BY ID ASC";

            $productsOrder = pg_query($dbConnection, $sql);

            if (!$productsOrder) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            $productsOrder = pg_fetch_all($productsOrder);

            return $productsOrder;
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
            foreach ($data as $orderProduct) {
                $orderProduct['created_at'] = date('Y-m-d H:i:s', time());

                $inserted = pg_insert($dbConnection, "order_products", $orderProduct);
            }

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

            $updated = pg_update($dbConnection, 'order_products', $attributes, $conditions);

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

            $deleted = pg_update($dbConnection, 'order_products', $data, $conditions);

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
