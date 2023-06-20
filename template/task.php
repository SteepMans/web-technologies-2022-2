<?php
    function generateFolder($elements, $parent) {
        foreach ($elements as $item) {
            if ($item["ref"] == $parent) {
                echo '<div class="list-item list-item_open" data-parent>' .
                        '<div class="list-item__inner">' .
                        '<img class="list-item__arrow" src="img/folder/chevron-down.png" alt="chevron-down" data-open>' .
                        '<img class="list-item__folder" src="img/folder/folder.png" alt="folder">';
                echo    '<span>' . $item["name"] . '</span>';
                echo '</div>';
                echo '<div class="list-item__items">';
                    generateFolder($elements, $item["id"]);
                echo '</div>';
                echo '</div>';
            }
        }
    }

    echo '<div class="list-items" id="list-items">';
    generateFolder($folders, null);
    echo '</div>';
?>
