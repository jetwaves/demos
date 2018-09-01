#!/usr/bin/node

// it's strange that use the config above will allow the script run as es6 without --harmony
//    but use config #!/usr/bin/node --harmony  will result an error

"use strict";

const log = console.log;
const fs = require('fs');

log('haha');



function readfile(fileFullName){
    return new Promise(
function(resolve, reject){
    fs.readFile(fileFullName, function(err, content){
        resolve(content.toString());
    })

});
}


(async function (){
    let content = await readfile('../../README.md');
    console.dir(content);


})();




///