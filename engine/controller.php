<?php

function prepareVariables($page, $action) {
    $params = [];
    $layout = 'layout';

    $params['name'] = get_user();
    $params['auth'] = isAuth();

    switch ($page) {
        case 'login':
            $login = $_POST['login'];
            $pass = $_POST['pass'];

            if (auth($login, $pass)) {
                if (isset($_POST['save'])) {
                    $hash = uniqid(rand(), true);
                    $id = $_SESSION['id'];
                    $sql = "UPDATE users SET hash = '{$hash}' WHERE id = {$id}";

                    mysqli_query(getDb(), $sql);
                    setcookie("hash", $hash, time() + 3600, "/");
                }
                header("Location: /");
                die();
            } else {
                die("Не верный логин или пароль");
            }
            break;

        case 'logout':
            setcookie("hash", "", time() - 1, "");
            session_regenerate_id();
            session_destroy();
            header("Location: /");
            die();
            break;

        case 'index':
            $params['title'] = 'Главная';
            break;

        case 'products':
            $params['products'] = getAllProducts();
            $layout = 'products';
            break;

        case 'details':
            $id = (int)$_GET['id'];
            doFeedbackAction($action, $id);

            $params["product"] = getProductsDetails($id);
            $params["info"] = getAllFeedback($id);
            $layout = 'products';
            break;

        default:
            echo '404';
            die();
    }

    return [
        'params' => $params,
        'layout' => $layout,
    ];
}