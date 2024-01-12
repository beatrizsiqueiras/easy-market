<?php

namespace Http\Controllers;

include(__DIR__ . '/../../Models/Database.php');
include(__DIR__ . '/../../Models/User.php');

use Models\User;

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

    public static function update(array $dice)
    {
        return User::update($dice);
    }

    public static function destroy(array $dice)
    {
        return User::delete($dice);
    }
}
