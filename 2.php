<?php

$data = array(
    "Ленинградская область" => array("Санкт-Петербург", "Всеволожск"),
    "Тюменская область" => array("Тюмень", "Ялуторовск")
);

foreach ($data as $state => $towns) {
    echo $state;
    echo implode(", ", $towns);
}