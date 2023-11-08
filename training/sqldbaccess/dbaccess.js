import { DbConnect } from "./dbconnect.js";
import sql from 'mssql';

class DataAccess {
    async getData(){
        if(await DbConnect.IsConnected()){
            let result = await sql.query(`Select * from ProductInfo`); 

            return result.recordset;
        }
    }

    async saveData(){
        if(await DbConnect.IsConnected()){
            let result = await sql.query(`Insert into ProductInfo values('Prod-0009', 'Bottle', 'Home Appliances', 'MS-Home','Water Bottle',30)`); 

            return result.recordset;
        }
    }
}

export {DataAccess};