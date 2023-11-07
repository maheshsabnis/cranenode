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
    resp.writeHead(200, {'Content-Type':'application/json'});
    resp.write(JSON.stringify(employees));
    resp.end();
});

/* Start Listening  */
server.listen(8070);
console.log('Server Started on port 8070');
