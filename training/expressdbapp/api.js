import express from 'express';
import { DataAccess } from './dbaccess.js';
 
const instance = express();
 
instance.use(express.json());

const dba = new DataAccess();


const port = process.env.PORT || 8090;

instance.get('/api/products', dba.getData);
instance.get('/api/products/:id', dba.getDataById);
instance.post('/api/products',dba.saveData);


/* Start Listening */

instance.listen(port, ()=>{
    console.log (`API is listening on port: ${port}`);
});