"use strict";


const moment = require('moment');
const exec = require('child_process').exec;
const clog = console.log;
const cdir = console.dir;



let command = 'ls -al';
exec(command, function (error, stdout, stderr) {
    console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
    console.log('┏---- INFO: ----- start [error @ ] -----');console.dir(error);console.log('┗---- INFO: -----  end  [error @ ] -----');

    console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
    console.log('┏---- INFO: ----- start [stdout @ ] -----');console.dir(stdout);console.log('┗---- INFO: -----  end  [stdout @ ] -----');

    console.log("\r\n"+moment().format('Y/MM/DD HH:mm:ss\t\t\t\t')+__filename);
    console.log('┏---- INFO: ----- start [stderr @ ] -----');console.dir(stderr);console.log('┗---- INFO: -----  end  [stderr @ ] -----');

    if(error){
        clog(' error result');
    } else {
        clog(' success result');
    }
});