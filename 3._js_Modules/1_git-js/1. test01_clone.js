"use strict";
var path = require('path');
var os = require('os');
var fs = require('fs');
var async = require('async');
var moment = require('moment');
var Promise = require('promise');
//var _ = require('underscore');
//var exec = require('child_process').exec;


try {
    console.log(require.resolve("mongodb"));
    console.log(require.resolve("mongojs"));
} catch(e) {
    console.error(chalk.bgRed(' error messages .......'));
    process.exit(e.code);
}

