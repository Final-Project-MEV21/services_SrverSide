<?php
require_once __DIR__ . '/vendor/autoload.php';

class API
{
    private $db_collection;

    public function __construct()
    {
        $this->client = new MongoDB\Client(
            'mongodb+srv://dev1:root@cluster0.aebkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        );
        $this->db_collection = $this->client->HdogT->Users;
    }

    public function Login($userName)
    {
        $loginQuery = array('Breed'=>$userName);
        $options = ['projection' => ['_id']];
        $result = $this->db_collection->findOne($loginQuery , $options);
        var_dump($result);
    }
}