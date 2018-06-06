<?php
/**
 * Created by PhpStorm.
 * User: jetwaves
 * Date: 18-3-16
 * Time: 上午11:10
 */

class Dog
{
    public $name;
    public $age;

    public static $staticValue = 'This is a public static value';

    /**
     * Dog constructor.
     */
    public function __construct($name, $age,$skill)
    {
        $this->name = $name;
        $this->age = $age;
        $this->skill = $skill;

    }


    public function bark(){
        echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   Dog barks: wang wang wang '.PHP_EOL.PHP_EOL;
    }

    public function eat(){

        echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   Dog Eating : mia mia mia '.PHP_EOL.PHP_EOL;
    }

    public function showSkill()
    {
        echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   Dog shows: wang +  '.$this->skill.PHP_EOL.PHP_EOL;
    }



    public static function say($word){
        echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   Dog says '.$word.' to you' .PHP_EOL.PHP_EOL;
    }

    public static function fetch($toyName){
        echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   Dog fetched a  '.$toyName.' for you' .PHP_EOL.PHP_EOL;
        return $toyName.' Fetched';
    }


}