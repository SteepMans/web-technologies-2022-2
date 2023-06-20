<?php
include "./../config/index.php";

$url_array = explode("/", $_SERVER['REQUEST_URI']);

if ($url_array[1] === "") {
    $page = 'index';
} else {
    $page = $url_array[1];
}

$params = [];
$layout = 'layout';

switch ($page) {
    case 'index':
        $params['title'] = 'Главная';
        break;
    
    case 'task':
        $params['folders'] = getFolders();
        $layout = 'task';
        break;

    default:
        echo '404';
        die();
}

echo render($page, $params, $layout);