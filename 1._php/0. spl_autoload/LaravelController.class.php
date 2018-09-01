<?php
/**
 * Created by PhpStorm.
 * User: jetwaves
 * Date: 18-3-16
 * Time: 上午11:43
 */

class LaravelController
{


    /**
     * LaravelController constructor.
     */
    public function __construct()
    {
        echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   Loading a Laravel Controller '.PHP_EOL.PHP_EOL;

    }


    public function dealSomeRequest()
    {
        echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   I handle http request for you '.PHP_EOL.PHP_EOL;
    }
    
    
}