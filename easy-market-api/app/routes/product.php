<?php

include('../Http/Controllers/ProductController.php');

use Http\Controllers\ProductController;

switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        echo ProductController::index();
        break;
    case 'POST':
        echo "POST";
        break;

    default:
        echo "method unsupported";
        break;
}
