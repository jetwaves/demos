<?php
/**
 * Created by PhpStorm.
 * User: jetwaves
 * Date: 18-3-16
 * Time: 上午11:54
 */



/*
 * Dog/ Cat 的类命名规则，是 Classname.php.
 * LaravelController  的类命名规则， 是 Classname.class.php
 *  命名规则的差异，文件位置的差异，会导致include的方式都不相同，
 *      eg： Laravel加载过程中的
 *          o 静态文件
 *          o psr-4
 *          o classmap
 *          o namespace
 * 所以不同类型的引用/包含外部类，需要不同写法的loader，
 *
 *  不同类型的loader如果全部写在 __autoload里面，会导致冗长而且没法维护
 *  使用spl_autoload ，可以在任意需要的地方声明loader，使用自己设定的方式来包含外部类。
 *
 *
 * */



function loader01($classname)
{
    echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'  1 $classname ='.$classname.PHP_EOL.PHP_EOL;
    $filename = "./".$classname.".php";
    if (is_file($filename))
    {
        include $filename;
    }
}



function loader02($classname)
{
    echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'  2 $classname ='.$classname.PHP_EOL.PHP_EOL;
    $filename = "./".$classname.".class.php";
    if (is_file($filename))
    {
        include $filename;
    }
}

spl_autoload_register('loader01');
spl_autoload_register('loader02');




$dog1 = new Dog('旺财',5, '滚雪球');

$dog1->bark();
$dog1->eat();
$dog1->showSkill();


$kf1 = new KongfuMaster('Jet LI',40, '胸口碎大石');

$kf1->practice();
$kf1->fight();
$kf1->showSkill();

$ctl = new LaravelController();
$ctl->dealSomeRequest();

