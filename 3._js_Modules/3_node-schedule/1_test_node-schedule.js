// var schedule = require('node-schedule');
//
// // var j = schedule.scheduleJob('42,52,02,12,22,32 * * * *', function(){
// var j = schedule.scheduleJob('42 * * * *', function(){
//     // console.log('          now   = ');  console.dir(date.toString());
//     console.log('The answer to life, the universe, and everything!');
// });



var CronJob = require('cron').CronJob;
new CronJob('5,15,25,35,45,55 * * * * *', function() {
    console.log('The answer to life, the universe, and everything!');
    // this message will show at every ?5 sec .
}, null, true, 'America/Los_Angeles');