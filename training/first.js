console.log('Hello Node.js');
console.log('I am the FIrst Program');

/* JSON Object Array */
let employees = [
    {EmpNo:101,EmpName:'Mahesh1', DeptName:'IT'},
    {EmpNo:102,EmpName:'Mahesh2', DeptName:'HR'},
    {EmpNo:103,EmpName:'Mahesh3', DeptName:'IT'},
    {EmpNo:104,EmpName:'Mahesh4', DeptName:'HR'},
    {EmpNo:105,EmpName:'Mahesh5', DeptName:'IT'},
    {EmpNo:106,EmpName:'Mahesh6', DeptName:'HR'}
];
/* JSON.stringify() method to convert The object as JSON string */
employees.forEach((val,idx)=>{
    console.log(`Record at Index: ${idx} is ${JSON.stringify(val)}`);
});
console.log();
let emp_IT = employees.filter((val,idx)=>{
    return val.DeptName === 'IT';
});

console.log(`Employees from IT Department = ${JSON.stringify(emp_IT)}`);