<?php
define('ROOT', dirname(__DIR__));
define('IMG_BIG', $_SERVER['DOCUMENT_ROOT'] . "/gallery_img/big/");
define('IMG_SMALL', $_SERVER['DOCUMENT_ROOT'] . "/gallery_img/small/");
define('TEMPLATE_DIR', ROOT . '/template/');
define('LAYOUTS_DIR', 'layouts/');

define('HOST', '127.0.0.1');
define('USER', 'root');
define('PASS', 'root');
define('DB', 'lesson21');

include ROOT . "/engine/render.php";
include ROOT . "/engine/auth.php";
include ROOT . "/engine/controller.php";
include ROOT . "/engine/db.php";
include ROOT . "/models/feedback.php";
include ROOT . "/models/products.php";