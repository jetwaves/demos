"use strict";
var path = require('path');
var os = require('os');
var fs = require('fs');
var async = require('async');
var moment = require('moment');
var Promise = require('promise');
//var _ = require('underscore');
//var exec = require('child_process').exec;

var chalk = require('chalk');


const exec = require('child_process').exec;
const execSync = require('child_process').execSync;

let repo_Without_Permission = 'https://git.coding.net/hamsing/FruitAndroid.git';
let repo2_with_Permission = 'https://git.coding.net/jetwaves/honorapi.git';
let command = 'git clone ' + repo_Without_Permission;
exec(command, function (error, stdout, stderr) {
    console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
    console.log('┏---- INFO: ----- start [error @ ] -----');console.dir(error);console.log('┗---- INFO: -----  end  [error @ ] -----');


    console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
    console.log('┏---- INFO: ----- start [stdout @ ] -----');console.dir(stdout);console.log('┗---- INFO: -----  end  [stdout @ ] -----');


    console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
    console.log('┏---- INFO: ----- start [stderr @ ] -----');console.dir(stderr);console.log('┗---- INFO: -----  end  [stderr @ ] -----');

    command = 'git clone ' + repo2_with_Permission;
    exec(command, function (error2, stdout2, stderr2) {
        console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
        console.log('┏---- INFO: ----- start [error2 @ ] -----');console.dir(error2);console.log('┗---- INFO: -----  end  [error2 @ ] -----');


        console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
        console.log('┏---- INFO: ----- start [stdout2 @ ] -----');console.dir(stdout2);console.log('┗---- INFO: -----  end  [stdout2 @ ] -----');


        console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
        console.log('┏---- INFO: ----- start [stderr2 @ ] -----');console.dir(stderr2);console.log('┗---- INFO: -----  end  [stderr2 @ ] -----');

    });


});