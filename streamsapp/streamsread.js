import fs from 'fs';

var data = '';

// Create a readable stream
var readerStream = fs.createReadStream('./index.txt');

// Set the ENcoding
readerStream.setEncoding('UTF8');

// The Stream Event for performing operations
readerStream.on('data', (chunk)=>{
    data += chunk;
});

// End the reading and show result

readerStream.on('end', ()=>{
    console.log(`The data from the file ${data}`);
});

// If error Occurred
readerStream.on('error', (err)=>{
    console.log(`Error ${err.stack}`);
});
