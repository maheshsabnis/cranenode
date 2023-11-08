import fs from 'fs';

/* Synchronous Write */

fs.writeFileSync("fileSync.txt", "The Data is Written to File Synchronously", {encoding:'utf-8'});

console.log('File is Written Successfully');

/* Write File Asynchronously */

// fs.writeFile('fileAsync.txt','Data is Written Asynchonously',{encoding:'utf-8'},(error)=>{
//     if(error){
//         console.log(`SOme Error Occurred ${error.message}`);
//         return;
//     }
//     console.log('File writing is complete');
// });

/* Append the File */

fs.appendFile("fileAsync1.txt","The New Appended Data in File Added Synchronously", {encoding:'utf-8'},(error)=>{
    if(error){
        console.log(`SOme Error Occurred while appending ${error.message}`);
        return;
    }
    console.log('File appending is complete');
});


/* COde on The Main Thread */
for(let i=0;i<10;i++)
    console.log('Main');