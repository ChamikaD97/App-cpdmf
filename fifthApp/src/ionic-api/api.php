<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Credential: true');
    header('Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, Accept, X-Request-With, x-xsrf-token');
    header('Content-Type: application/json; charset=utf-8');

    include 'config.php';

    $postJSON=json_decode(file_get_contents('php://input'),true);
    $today=date('Y-m-d H:i:s');

    if($postJSON['action']=='login_progress'){
        $logindata=mysqli_fetch_array(mysqli_query($mysqli,"SELECT * FROM member WHERE memberId='$postJSON[memberId]' AND password='$postJSON[password]'"));
        $data =array(
            'memberId'  =>$logindata['memberId'],
            'password'  =>$logindata['password']
        );
        if($logindata){
            $result=json_encode(array('success'=>true,'result'=>$data));
        }
        else{
            $result=json_encode(array('success'=>false));
        }
        echo $result;
    }
?>