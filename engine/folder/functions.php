<?php

function getFolders() {
    return getAssocResult("SELECT *FROM `folder`");
}