<?php

namespace Models;

use PDO;

class Database extends PDO
{
    const HOST = 'localhost';
    const PORT = '5432';
    const USER = 'admin';
    const PASS = 'm4rk3t';
    const DB_NAME = 'easy_market';

    private static $database;
    private static $error;


    public static function dbConnection()
    {
        $connection_string = "host=" . self::HOST . " port=" . self::PORT . " dbname=" . self::DB_NAME . " user=" . self::USER . " password=" . self::PASS;
        
        self::$database = pg_connect($connection_string);
        return self::$database;
    }
}
