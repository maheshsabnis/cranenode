import { DataAccess } from "./dbaccess.js";

const dba = new DataAccess();

const records = await dba.getData();

console.log(`Result : ${JSON.stringify(records)}`);

const records1 = await dba.saveData();

console.log(`Result : ${JSON.stringify(records1)}`);