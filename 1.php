<?php

$index = 0;

do {
    if ($index == 0)
        echo "Это четное";
    else
        echo $index % 2 > 0 ? "Это нечетное" : "Это четное";

    $index += 1;
} while ($index <= 10)

?>