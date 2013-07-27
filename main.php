<?php
    //Just makes sure each name has ONLY a capitalized first letter
    $name = ucfirst(strtolower($_GET['name']));

    $nameArray = array('Jayson','Mel','Melverton','Karishma', 'Jin', 'Alan','Dan','Jocelyn','Erin','Tina','Janny');

    if(in_array($name, $nameArray)){
        echo 'YOU ARE COOL';
    } elseif($food == ""){
        echo "Enter something stupid";
    } else{
        echo 'Go Away';   
    }
?>