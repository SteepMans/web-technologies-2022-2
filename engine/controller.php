<?php

function prepareVariables($page, $action) {
    $params = [];
    $layout = 'layout';

    switch ($page) {
        case 'index':
            $params['title'] = 'Главная';
            break;
        case 'news':
            $params['news'] = getNews();
            break;
        case 'onenews':
            $id = (int)$_GET['id'];
            $params['news'] = getOneNews($id);
            break;
        case 'gallery':
            $layout = 'gallery';
            $params['gallery'] = getGallery(IMG_BIG);
            break;
        case 'catalog':
            $params['title'] = 'Каталог';
            $params['catalog'] = getCatalog();
            break;
        case 'about':
            $params['title'] = 'О нас';
            $params['phone'] = 34235245325;
            break;
        case 'feedback':
            doFeedbackAction($action);
            $params['feedback'] = getAllFeedback();
            break;
        case 'apicatalog':
            echo json_encode(getCatalog(), JSON_UNESCAPED_UNICODE);
            die();
        default:
            echo '404';
            die();
    }

    return [
        'params' => $params,
        'layout' => $layout,
    ];
}