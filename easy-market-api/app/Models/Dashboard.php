<?php

namespace Models;

use PDOException;

date_default_timezone_set('America/Sao_Paulo');

class Dashboard
{

    public static function totalProducts()
    {
        try {

            $dbConnection = Database::dbConnection();
            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }
            $sql = "SELECT COUNT(*) AS total_products
                FROM PRODUCT
                WHERE DELETED_AT IS NULL";

            $totalProducts = pg_query($dbConnection, $sql);

            if (!$totalProducts) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            $totalProducts = pg_fetch_all($totalProducts);

            return $totalProducts[0]['total_products'];
        } catch (PDOException $e) {
            echo "Erro de conexão: " . $e->getMessage();
        } finally {
            if ($dbConnection !== null) {
                pg_close($dbConnection);
            }
        }
    }

    public static function totalCategories()
    {
        try {

            $dbConnection = Database::dbConnection();
            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }
            $sql = "SELECT COUNT(*) AS total_categories
                FROM CATEGORY
                WHERE DELETED_AT IS NULL";


            $totalCategories = pg_query($dbConnection, $sql);

            if (!$totalCategories) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            $totalCategories = pg_fetch_all($totalCategories);

            return $totalCategories[0]['total_categories'];
        } catch (PDOException $e) {
            echo "Erro de conexão: " . $e->getMessage();
        } finally {
            if ($dbConnection !== null) {
                pg_close($dbConnection);
            }
        }
    }

    public static function totalOrders()
    {
        try {

            $dbConnection = Database::dbConnection();
            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }

            $sql = "SELECT COUNT(*) AS total_orders
                FROM PUBLIC.ORDER
                WHERE DELETED_AT IS NULL";

            $totalOrders = pg_query($dbConnection, $sql);

            if (!$totalOrders) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            $totalOrders = pg_fetch_all($totalOrders);

            return $totalOrders[0]['total_orders'];
        } catch (PDOException $e) {
            echo "Erro de conexão: " . $e->getMessage();
        } finally {
            if ($dbConnection !== null) {
                pg_close($dbConnection);
            }
        }
    }

    public static function ordersChartData()
    {
        try {

            $dbConnection = Database::dbConnection();
            if (!$dbConnection) {
                echo "An error occurred in custom database connection.\n";
                exit;
            }

            $sql = "SELECT
                        TO_CHAR(created_at, 'Mon') AS month,
                        EXTRACT(YEAR FROM created_at) AS year,
                        COUNT(*) AS count
                    FROM
                        public.order
                    GROUP BY
                        TO_CHAR(created_at, 'Mon'),
                        EXTRACT(YEAR FROM created_at)
                    ORDER BY
                        EXTRACT(YEAR FROM MIN(created_at)),
                        EXTRACT(MONTH FROM MIN(created_at));";

            $chartData = pg_query($dbConnection, $sql);

            if (!$chartData) {
                echo "An error occurred in query execution.\n";
                exit;
            }

            $chartData = pg_fetch_all($chartData);

            return $chartData;
        } catch (PDOException $e) {
            echo "Erro de conexão: " . $e->getMessage();
        } finally {
            if ($dbConnection !== null) {
                pg_close($dbConnection);
            }
        }
    }
}
