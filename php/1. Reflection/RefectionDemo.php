<?php
/**
 * Created by PhpStorm.
 * User: jetwaves
 * Date: 18-6-6
 * Time: 上午11:48
 */
namespace demos\testReflection;

use Reflection;
use ReflectionClass;
require('./Dog.php');

// 初始化反射类
$ref = new ReflectionClass('Dog');
// 下面是两个最基本的反射类的应用：

    // 获取类名
    $className = $ref->getName();
    echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   $ref->getName() =  '.$ref->getName().PHP_EOL.PHP_EOL;
        //$ref->getName() =  Dog

    // 获取类的所有方法
    echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   $ref->getMethods() =  '.print_r($ref->getMethods(), true) .PHP_EOL.PHP_EOL;
        //$ref->getMethods() =  Array
        //(
        //    [0] => ReflectionMethod Object
        //(
        //    [name] => __construct
        //[class] => Dog
        //        )
        //
        //    [1] => ReflectionMethod Object
        //(
        //    [name] => bark
        //[class] => Dog
        //        )
        //
        //    [2] => ReflectionMethod Object
        //(
        //    [name] => eat
        //[class] => Dog
        //        )
        //
        //    [3] => ReflectionMethod Object
        //(
        //    [name] => showSkill
        //[class] => Dog
        //        )
        //
        //    [4] => ReflectionMethod Object
        //(
        //    [name] => say
        //[class] => Dog
        //        )
        //
        //)

// ========= 实际应用 =========
// 1. 用反射得到这个method
// 2. 反射得到的method是一个  ReflectionFunction  http://php.net/manual/zh/class.reflectionfunction.php
// 3. ReflectionFunction 的一个方法是 获取闭包（getClosure）
// 4. call_user_func 的第一个参数（要调用的方法）需要是一个callable的闭包或者callback
// 5. 下面这种 call_user_func 方法就可以调用一个，用反射方法获取到的类内部方法，并且能够传入自定义参数
$methodSay = $ref->getMethod('say');
echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   $ref->getMethod(\'say\') =  '.print_r($methodSay, true) .PHP_EOL.PHP_EOL;

call_user_func($methodSay->getClosure(),'"hello world"');


// 用反射调用类内部方法，同样能够得到返回值
$methodFetch = $ref->getMethod('fetch');
$fetchedThing = call_user_func($methodFetch->getClosure(),'"ball"');

echo ''.__FILE__.'->'.__method__.'() line:'.__line__.PHP_EOL.'   $fetchedThing =  '.print_r($fetchedThing, true).PHP_EOL.PHP_EOL;