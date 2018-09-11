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


//  =========== Read the following doc to see how to specify options =========
//      https://github.com/steveukx/git-js#how-to-specify-options


try {
    require.resolve("simple-git")
} catch(e) {
    console.error(chalk.bgRed(' simple-git module is not installed '));
    process.exit(e.code);
}

const simpleGit = require('simple-git')();

const gitRepo = 'https://github.com/jetwaves/mysqlStreamImporter.git';

// // 1. Clone a repository  ( without login - password )
// //       - Don't need password if git credential is memorised locally
// //       - login:password should be entered in the CLI
// simpleGit.clone(gitRepo, function(){
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


// // 4. Git log / with no options
// simpleGit.log(function(err, log){
//     console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
//     console.log('┏---- INFO: ----- start [log @ ] -----');console.dir(log);console.log('┗---- INFO: -----  end  [log @ ] -----');
// });


// // 5. Git log  with options
// let option5 = {'--since':'2018-06-01', '--until':'2018-09-31'};
// simpleGit.log(option5, function(err, log){
//     console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
//     console.log('┏---- INFO: ----- start [log @ ] -----');console.dir(log);console.log('┗---- INFO: -----  end  [log @ ] -----');
// });


// // // 6. Git branch          to get a total summary
// simpleGit.branch(function(err, branchInfo){
//     console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
//     console.log('┏---- INFO: ----- start [err @ ] -----');console.dir(err);console.log('┗---- INFO: -----  end  [err @ ] -----');
//     console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
//     console.log('┏---- INFO: ----- start [branchInfo @ ] -----');console.dir(branchInfo);console.log('┗---- INFO: -----  end  [branchInfo @ ] -----');
// });


//=======  result of 6's branch summary ========
// BranchSummary {
//     detached: false,
//         current: 'master',
//         all:
//     [ 'master',
//         'remotes/origin/dev',
//         'remotes/origin/feature_1019',
//         'remotes/origin/feature_2507',
//         'remotes/origin/master',
//         'remotes/origin/release',
//         'remotes/origin/test' ],
//         branches:
//     {    master:
//         { current: true,                         <=====    current branch.
//             name: 'master',
//             commit: '2f4b4dd',
//             label: 'here is the commit message of this branch' },
//      ----------------  remote branches ------------
//         'remotes/origin/dev':
//         { current: false,
//             name: 'remotes/origin/dev',
//             commit: 'ecc42ca',
//             label: 'here is the commit message of this branch' },
//         'remotes/origin/feature_2507':
//         { current: false,
//             name: 'remotes/origin/feature_2507',
//             commit: 'd8fee53',
//             label: 'here is the commit message of this branch ' },
//         'remotes/origin/master':
//         { current: false,
//             name: 'remotes/origin/master',
//             commit: '2f4b4dd',
//             label: 'here is the commit message of this branch' },
//         'remotes/origin/test':
//         { current: false,
//             name: 'remotes/origin/test',
//             commit: '48c11ca',
//             label: 'add lhy.jnt' } } }


// // 7. Git branchLocal
// simpleGit.branchLocal(function(err, branchInfo){
//     console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
//     console.log('┏---- INFO: ----- start [err @ ] -----');console.dir(err);console.log('┗---- INFO: -----  end  [err @ ] -----');
//     console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
//     console.log('┏---- INFO: ----- start [branchInfo @ ] -----');console.dir(branchInfo);console.log('┗---- INFO: -----  end  [branchInfo @ ] -----');
// });

//=======  result of 7's branch summary ========
// BranchSummary {
//     detached: false,
//         current: 'master',
//         all: [ 'master' ],
//         branches:
//     { master:
//     { current: true,
//         name: 'master',
//         commit: '2f4b4dd',
//         label: '图片更改' } } }


// // 7. Git fetch
// simpleGit.fetch(function(err, info){
//     console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
//     console.log('┏---- INFO: ----- start [err @ ] -----');console.dir(err);console.log('┗---- INFO: -----  end  [err @ ] -----');
//     console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
//     console.log('┏---- INFO: ----- start [info @ ] -----');console.dir(info);console.log('┗---- INFO: -----  end  [info @ ] -----');
// });

// // 7. Git fetch  --all
// let option8 = {'--all': true};
// simpleGit.fetch(option8, function(err, info){
//     console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
//     console.log('┏---- INFO: ----- start [err @ ] -----');console.dir(err);console.log('┗---- INFO: -----  end  [err @ ] -----');
//     console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
//     console.log('┏---- INFO: ----- start [info @ ] -----');console.dir(info);console.log('┗---- INFO: -----  end  [info @ ] -----');
// });


// 8. git remote -v
// simpleGit.getRemotes(true ,function(err, info){
//     console.log(chalk.bold.inverse("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename));
//     console.log('┏---- INFO: ----- start [err @ ] -----');console.dir(err);console.log('┗---- INFO: -----  end  [err @ ] -----');
//
//     console.log(chalk.bold.inverse("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename));
//     console.log('┏---- INFO: ----- start [info @ ] -----');console.dir(info);console.log('┗---- INFO: -----  end  [info @ ] -----');
// });

// [ { name: 'origin',
//     refs:
//         { fetch: 'https://github.com/jetwaves/demos.git',
//             push: 'https://github.com/jetwaves/demos.git' } } ]























































