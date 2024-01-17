<?php

namespace Models;

use PDOException;

date_default_timezone_set('America/Sao_Paulo');

class Order
{
    public static function all()
    {
        try {
            $dbConnection = Database::dbConnection();

            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }

            $sql = "SELECT O.ID,
                    O.TOTAL_TAXES,
                    o.TAXES,
                    O.TOTAL,
                    TO_CHAR(O.CREATED_AT, 'DD/MM/YYYY') AS created_at_date,
                    TO_CHAR(O.CREATED_AT, 'HH24:MI') AS created_at_time
                FROM public.order AS O
                WHERE O.DELETED_AT IS NULL
                ORDER BY ID DESC";

            $orders = pg_query($dbConnection, $sql);

            if (!$orders) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            $orders = pg_fetch_all($orders);

            return $orders;
        } catch (PDOException $e) {
            echo "Connection error: " . $e->getMessage();
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

            $order = $data['order'];
            $order['created_at'] = date('Y-m-d H:i:s', time());

            $inserted = pg_insert($dbConnection, "order", $order);

            $sqlOrderId = "SELECT id FROM public.order WHERE deleted_at IS NULL ORDER BY id DESC LIMIT 1";
            $query = pg_query($dbConnection, $sqlOrderId);

            $orderId = pg_fetch_all($query)[0]['id'];

            $orderProducts = $data['orderProducts'];

            foreach ($orderProducts as $orderProduct) {

                $productId = $orderProduct['id'];
                $quantity = $orderProduct['selectedQuantity'];
                $createdAt = date('Y-m-d H:i:s', time());

                $availableQuantity = intval($orderProduct['available_quantity']) - intval($orderProduct['selectedQuantity']);

                $orderProductData = array(
                    "product" => $productId,
                    "order" => $orderId,
                    "quantity" => $quantity,
                    "created_at" => $createdAt
                );

                pg_insert($dbConnection, 'order_products', $orderProductData);

                $productFieldsToBeUpdated = array("available_quantity" => $availableQuantity);
                $productToBeUpdatedCondtions = array("id" => $productId);

                pg_update($dbConnection, 'product', $productFieldsToBeUpdated, $productToBeUpdatedCondtions);
            }

            if (!$inserted) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            return $inserted;
        } catch (PDOException $e) {

            echo "Connection error: " . $e->getMessage();
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

            $updated = pg_update($dbConnection, 'order', $attributes, $conditions);

            if (!$updated) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            return $updated;
        } catch (PDOException $e) {
            echo "Connection error: " . $e->getMessage();
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

            $deleted = pg_update($dbConnection, 'order', $data, $conditions);

            if (!$deleted) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            return $deleted;
        } catch (PDOException $e) {
            echo "Connection error: " . $e->getMessage();
        } finally {
            if ($dbConnection !== null) {
                pg_close($dbConnection);
            }
        }
    }
}
