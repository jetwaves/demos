#! /usr/bin/node --harmony

"use strict";

const moment  = require('moment');
const os      = require('os');
const log     = console.log;
const _       = require('lodash');
const fs      = require('fs');
const chalk   = require('chalk');
const program   = require('commander');



function getAll(){
    return new Promise(
        function(resolve, reject){
            let mongojs = require('mongojs');
            let db = mongojs('mydb:123456@127.0.0.1/mydb', ['mycol']);
            db.test.find({}).toArray(function(err, docs){
                if(err) return reject(err);
                resolve(docs);
            });

        })
}


(async function (){

    // === this way to acces mognodb works well ===
    let res = await getAll();
    console.dir(res);
    console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
    console.log('┏---- INFO: ----- start [res @ ] -----');console.dir(res);console.log('┗---- INFO: -----  end  [res @ ] -----');


    // === following way will not work ===
    // let mongojs = require('mongojs');
    // let db = mongojs('mydb:123456@127.0.0.1/mydb', ['mycol']);
    // let res = await db.test.find({}).toArray();
    // let [err, res] = await db.test.find({}).toArray();




})();


// 1. mongodb 3.4 以后，mongodb server有以下改动：
//      1.1  数据库root角色用户鉴权必须通过admin库
// 1.2  native client 取消了 db.authenticate 方法
// 2. 导致以下问题：
//      2.1 使用代码鉴权连接数据库的时候，不能只有一个root权限的admin用户，因为这个用户只能操作admin库，不能操作用户自己的库
// 2.2 无法使用db.authenticate 方法使用另外库用户身份鉴权
// 3. 解决方案：
//      3.1  数据库管理：建立用户体系：
//         - admin库建立  root角色的admin用户：
//                    use admin;
// db.createUser({user:'admin', pwd:'123456',roles:[ { role: "root", db: "admin" } ]});
// - 业务库 biz 建立自己库内的超级用户：（注意不同角色对应不同读写和维护权限）
//                    use biz;
// db.createUser({user:'biz_admin', pwd:'123456',roles:[ { role: "dbOwner", db: "biz" } ]});
// - 这样操作，biz库就有了一个 名为 biz_admin 的库内超级用户
// 3.2 代码写法看右边： =》
//         - 连接数据库并鉴权   let db = mongojs('mydb:123456@127.0.0.1/mydb', ['mycol']);
// - 执行查询    db.mycol.find({}).toArray(function(err, docs){}


// Learn more About mongodb Roles:
//      https://docs.mongodb.com/manual/reference/built-in-roles/index.html#database-user-roles
