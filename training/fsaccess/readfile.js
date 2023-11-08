import fs from 'fs';

/* Synchronous Reading of the File */

let dataSync = fs.readFileSync('fileSync.txt', {encoding:'utf-8'});

console.log(`Synchronous Reading : ${dataSync}`);

/* Async Read */

fs.readFile('fileAsync.txt', {encoding:'utf-8'},(error, data)=>{
    if(error){
        console.log(`Some Error Occurred while Reading file ${error.message}`);
        return;
    }
    /* The 'data' is the result returned from the internal Thread */
    console.log(`Async Read : ${data}`);
});