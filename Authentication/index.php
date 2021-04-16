<?php
    require_once 'API.php';

    
    function jsonValidation($str){
        json_decode($str);
            return json_last_errror() == JSON_ERROR_NONE;
    }


//    if($_POST){
//        $sentJson = file_get_contents("php://input");
//        if(strlen($sentJson) > 0 && jsonValidation($sentJson)){
//            $decodedJson = json_decode($sentJson);
//
//        }
//    } else {
//        //here will be more code
//        print_r("Hello Dummy");
//    }

    $api  = new API();
    if($api->Login("Test1")){
        echo "User Exists";
    }else{
        echo "User Dont Exists";
    }
