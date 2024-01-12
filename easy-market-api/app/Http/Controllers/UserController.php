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
        return User::login($data);
    }
}
