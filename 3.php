<?php

function convertToLatin(String $string) : String {
    $array = array(
        "а" => "a","б" => "b","в" => "v","г" => "g","д" => "d","е" => "e",
        "ж" => "zh","з" => "z","и" => "i","й" => "y","к" => "k","л" => "i","м" => "m",
        "н" => "n","о" => "o","п" => "p","р" => "r","с" => "s","т" => "t","у" => "u",
        "ф" => "f","х" => "h","ц" => "ts","ч" => "ch","ш" => "sh","щ" => "sht","ъ" => "а",
        "ь" => "y","ю" => "yu","я" => "ya"
    );

    $result = "";

    foreach (str_split($string) as $key => $value) {
        $result += $array[$value];
    }

    return $result;
}

echo convertToLatin("Тестовая строка");