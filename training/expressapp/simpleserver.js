import express from 'express';
import { employees,users } from './harddata.js';
const instance = express();
/* Define JSON middleware */
/* For HTTP BOdy */
/* Read the HTTP Body and Parse it based on MIME-Type */
instance.use(express.json());


const port = process.env.PORT || 8090;

/* Use REST Methods */
instance.get('/api/employees',(req,resp)=>{
    /* Read Authorization Headers */
    
    // const authValues = req.headers.authorization;
    // /* Split data based on ":" , this will return an array of string
    //   0th index will be username and 1st index is password
    // */
    // const authData = authValues.split(':');

    // console.log(`${JSON.stringify(authValues)}`);
    // if(authData[0].trim() === 'mahesh' && authData[1].trim() === 'mahesh'){
    //     resp.status(200).json(employees);
    // } else {
    //     resp.status(401).json({
    //         message: 'Invalid UserName or Password'
    //     });
    // }

    if(isAuth(req)){
        resp.status(200).json(employees);
    } else {
        resp.status(401).json({
                    message: 'Invalid UserName or Password'
                });
    }
});

instance.get('/api/employees/:id',(req,resp)=>{
    const id = req.params['id'];
    const emps = employees.filter((e,i)=> {return e.EmpNo === parseInt(id);});
    resp.status(200).json(emps);
});
instance.post('/api/employees',(req,resp)=>{
    const emp = req.body;
    console.log(`Received Body : ${JSON.stringify(req.body)}`);
    employees.push(emp);
    resp.status(200).json(employees);
});

instance.put('/api/employees/:id',(req,resp)=>{
    const emp = req.body;
    console.log(`Received Body : ${JSON.stringify(req.body)}`);
    employees.push(emp);
    resp.status(200).json(employees);
});

instance.delete('/api/employees/:id',(req,resp)=>{
    const emp = req.body;
    console.log(`Received Body : ${JSON.stringify(req.body)}`);
    employees.push(emp);
    resp.status(200).json(employees);
});



/* Start Listening */

instance.listen(port, ()=>{
    console.log (`API is listening on port: ${port}`);
});


function isAuth(req){
    const authValues = req.headers.authorization;
    /* Split data based on ":" , this will return an array of string
      0th index will be username and 1st index is password
    */
    const authData = authValues.split(':');

    if(authData[0].trim() === 'mahesh' && authData[1].trim() === 'mahesh')
        return true;
    return false;
}

