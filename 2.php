<?php

$data = array(
    "������������� �������" => array("�����-���������", "����������"),
    "��������� �������" => array("������", "����������")
);

foreach ($data as $state => $towns) {
    echo $state;
    echo implode(", ", $towns);
}