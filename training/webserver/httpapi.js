/* Import http module */
import http from 'http';


/* JSON Object Array */
let employees = [
    {EmpNo:101,EmpName:'Mahesh1', DeptName:'IT'},
    {EmpNo:102,EmpName:'Mahesh2', DeptName:'HR'},
    {EmpNo:103,EmpName:'Mahesh3', DeptName:'IT'},
    {EmpNo:104,EmpName:'Mahesh4', DeptName:'HR'},
    {EmpNo:105,EmpName:'Mahesh5', DeptName:'IT'},
    {EmpNo:106,EmpName:'Mahesh6', DeptName:'HR'}
];


/* Create a Server */
/* Input parameter for the createServer() is 
 InputMessage and ServerResponse
*/
const server = http.createServer((req,resp)=>{
     /* Read the Request Method */
     if(req.method === 'GET'){
        let dname = req.headers['dname'];
     
        if(dname) { 
            let emp_dname = employees.filter((val,idx)=>{
                return val.DeptName.trim() === dname.trim();
            });
            console.log(emp_dname);
            resp.writeHead(200, {'Content-Type':'application/json'});
            resp.write(JSON.stringify(emp_dname));
            resp.end();
        } else {
            resp.writeHead(200, {'Content-Type':'application/json'});
            resp.write(JSON.stringify(employees));
            resp.end();
        }
     }
     if(req.method === 'POST') {
        /* Define a string object */
        let receivedData = '';
        req.on('data',(chunk)=>{
             /* Add data received from the chunk into the receivedData object and make sure that the chunk is pased based on the 'Content-Type' */
             receivedData = JSON.parse(chunk);   
        });
        /* End the Request reading and now process the received data */
        req.on('end',()=>{
            console.log(JSON.stringify(receivedData));
            /* Push data into an array */
            employees.push(receivedData);
            console.log(JSON.stringify(employees));
            resp.writeHead(200, {'Content-Type':'application/json'});
            resp.write(JSON.stringify(employees));
            resp.end();
        });
       
     }
     if(req.method === 'PUT') {
        /* Read data EmpNo from HEader, check if the Record found based on EMpNo
         if found (use indexOf), update it 
        */
        resp.writeHead(200, {'Content-Type':'application/json'});
        resp.write('PUT');
        resp.end();
     }
     if(req.method === 'DELETE') {
          /* Read data EmpNo from HEader, check if the Record found based on EMpNo
         if found (use indexOf), remove (splice) it 
        */
        resp.writeHead(200, {'Content-Type':'application/json'});
        resp.write('DELETE');
        resp.end();  
     }
});

/* Start Listening  */
server.listen(8070);
console.log('Server Started on port 8070');
