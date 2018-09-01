<?php
/**
 * Created by PhpStorm.
 * User: jetwaves
 * Date: 18-3-16
 * Time: 上午11:21
 */

require('./Dog.php');

function __autoload($classname)
{
    echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   $classname ='.$classname.PHP_EOL.PHP_EOL;
    $filename = "./".$classname.".php";
    if (is_file($filename))
    {
        include $filename;
    }
}


$dog1 = new Dog('旺财',5, '滚雪球');

$dog1->bark();
$dog1->eat();
$dog1->showSkill();


$kf1 = new KongfuMaster('Jet LI',40, '胸口碎大石');

$kf1->practice();
$kf1->fight();
$kf1->showSkill();


$kf3 = new Houzi();
