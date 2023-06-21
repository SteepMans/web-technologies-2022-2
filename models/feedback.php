<?php

function getAllFeedback($id) {
    $sql = "SELECT * FROM `feedback` WHERE product_id = " . $id . " ORDER BY `id` DESC";
    return getAssocResult($sql);
}

function addFeedback() {
    $sql = "INSERT INTO `feedback` (`name`, `answer`, `product_id`) VALUES ('{$_POST['name']}','{$_POST['message']}',{$_POST["product"]})";

    executeSql($sql);
}

function deleteFeedback($feedback_id) {
    $sql = "DELETE FROM `feedback` WHERE `id` = ". $feedback_id;

    executeSql($sql);
}

function doFeedbackAction($action, $id) {
    if ($action === "add") {
        addFeedback();
    } else if ($action === "delete") {
        deleteFeedback($id);
    }
}