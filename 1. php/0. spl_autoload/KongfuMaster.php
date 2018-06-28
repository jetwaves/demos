<?php
/**
 * Created by PhpStorm.
 * User: jetwaves
 * Date: 18-3-16
 * Time: 上午11:10
 */

class KongfuMaster
{
    public $name;
    public $age;
    public $skill;

    /**
     * Dog constructor.
     */
    public function __construct($name, $age, $skill)
    {
        $this->name = $name;
        $this->age = $age;
        $this->skill = $skill;
    }


    public function practice(){
        echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   KongfuMaster : Practising Kongfu ... '.PHP_EOL.PHP_EOL;
    }

    public function fight(){
        echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   KongfuMaster fighting  : HEI HA !!!'.PHP_EOL.PHP_EOL;
    }

    public function showSkill(){
        echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   KongfuMaster shows: I can do '.$this->skill.PHP_EOL.PHP_EOL;
    }



}