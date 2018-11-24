"use strict";
const program   = require('commander');

const path = require('path');
const os = require('os');
const fs = require('fs');
const async = require('async');
const moment = require('moment');
const Promise = require('promise');
const _ = require('underscore');
const chalk = require('chalk');

const exec = require('child_process').exec;
const execSync = require('child_process').execSync;

const clog = console.log;
const cdir = console.dir;


function validDate(val){
    if(moment(val).isValid()){
        return val;
    } else {
        return false;
    }
}

const currentVersion = '0.111.222';

// use --help to see command descriptions

program
    .version(currentVersion)
    .usage('yourCommand [--cusParam1=] [--cusParam2=] [--since=] [--until=] ')
    .description('  description of yourCommand')
    .option('--since <YYYY-MM-DD>', 'start date of analyse YYYY-MM-DD', validDate)
    .option('--until <YYYY-MM-DD>', 'end date of analyse YYYY-MM-DD', validDate)
    .option('--weekly', 'do works for last week ( -7 days from today 00:00:00 )')
    .option('--daily', 'do works for last day ( -1 day from today 00:00:00 )')
    .parse(process.argv);


let param = {
    since : program.since,
    until : program.until,
    cusParam1 : program.cusParam1,
    cusParam2 : program.cusParam2
};

clog("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
clog('┏---- INFO: ----- start [param @ ] -----');cdir(param);clog('┗---- INFO: -----  end  [param @ ] -----');




