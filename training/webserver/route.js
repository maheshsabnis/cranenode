import fs from "fs1";
import path from "path";
import http from 'http';
import { fileURLToPath } from "url";


// 1. Read the Server Path
let __fileName = fileURLToPath(import.meta.url);
console.log(`File Name = ${__fileName}`);
// 2. Combine this with the actual Resource Path
let dirPath = path.join(__fileName, "./../../views");
console.log(`The Drectory Path : ${dirPath}`);

let employees = [
    {EmpNo:101,EmpName:'Mahesh1', DeptName:'IT'},
    {EmpNo:102,EmpName:'Mahesh2', DeptName:'HR'},
    {EmpNo:103,EmpName:'Mahesh3', DeptName:'IT'},
    {EmpNo:104,EmpName:'Mahesh4', DeptName:'HR'},
    {EmpNo:105,EmpName:'Mahesh5', DeptName:'IT'},
    {EmpNo:106,EmpName:'Mahesh6', DeptName:'HR'}
];


const server = http.createServer((request,response)=>{

    if(request.url === '/data' && request.method === 'GET'){
        let dname = request.headers['dname'];
     
        if(dname) { 
            let emp_dname = employees.filter((val,idx)=>{
                return val.DeptName.trim() === dname.trim();
            });
            console.log(emp_dname);
            response.writeHead(200, {'Content-Type':'application/json'});
            response.write(JSON.stringify(emp_dname));
            response.end();
        } else {
            response.writeHead(200, {'Content-Type':'application/json'});
            response.write(JSON.stringify(employees));
            response.end();
        }
     }


    if(request.url === "/home"){
        let homeHTML = fs.readFileSync(`${dirPath}/home.html`);
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(homeHTML);
        response.end();
    }

    if(request.url === "/about"){
        let homeHTML = fs.readFileSync(`${dirPath}/about.html`);
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(homeHTML);
        response.end();
    }

    if(request.url === "/contact"){
        let homeHTML = fs.readFileSync(`${dirPath}/contact.html`);
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(homeHTML);
        response.end();
    }
    
}); 


server.listen(8070);
console.log(`Server Started on port 8070`);
