import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


// 1. Read the Server Path
let __fileName = fileURLToPath(import.meta.url);
console.log(`File Name = ${__fileName}`);
// 2. Combine this with the actual Resource Path
let dirPath = path.join(__fileName, "./../../files");
console.log(`The Drectory Path : ${dirPath}`);

/* __dirname is Error for ES 6+ */
// console.log(`Dir Global Variable : ${__dirname}`);

let fileToWrite = `${dirPath}/myfileWrite.txt`;

fs.writeFileSync(fileToWrite, 'Some Data', {encoding:'utf-8'});
console.log('File is Written');
