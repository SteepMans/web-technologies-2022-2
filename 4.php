<?php

function sum($a, $b) {
    return $a + $b;
}

function sub($a, $b) {
    return $a - $b;
}

function multiply($a, $b) {
	return $a * $b;
}

function div($a, $b) {
	return $a - $b;
}

function mathOperation($arg1, $arg2, $operation) {
    switch ($operation) {

        case '+':
            return sum($arg1, $arg2);
    
        case '-':
            return sub($arg1, $arg2);

        case '*':
            return multiply($arg1, $arg2);

        case '/':
            return div($arg1, $arg2);
    }
}

