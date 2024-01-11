<?php

namespace Models;

class Category
{
    public static function all()
    {

        $databaseConn = Database::dbConnection();
        if (!$databaseConn) {
            echo "An error occurred.\n";
            exit;
        }

        $result = pg_query($databaseConn, "SELECT * FROM category");

        if (!$result) {
            echo "An error occurred.\n";
            exit;
        }

        $arr = pg_fetch_all($result);

        return $arr;
    }
}
