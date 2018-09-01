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

try {
    require.resolve("simple-git")
    // console.log();
} catch(e) {
    console.error(chalk.bgRed(' simple-git module is not installed '));
    process.exit(e.code);
}

const simpleGit = require('simple-git')();

// 1. Clone a repository  ( without login - password )
//        - Don't need password if git credential is memorised locally
//        - login:password should be entered in the CLI
// simpleGit.clone('https://coding.net/u/jetwaves/p/posSite', function(){
//
// });

// // 2. Git pull to update
// simpleGit.pull(function(){
//
// });

// // 3. Git pull with branches and  options
// simpleGit.pull('origin','dev','--force', function(){
//
// });




