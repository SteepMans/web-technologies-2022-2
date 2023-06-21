<?php

function getAllProducts() {
    return getAssocResult("SELECT * FROM `products`");
}

function getProductsDetails($id) {
    return getOneResult("SELECT * FROM `products` WHERE id=" . $id);
}