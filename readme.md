# Node.js
# JavaScript
- console.log()
- Data STructures
    - Array
````javascript
  let arr = [];  
````
- No Data Types
    - string
        - '' OR ""
        - length,
        - toUpper(), toLower(), reverse(), indexOf(), lastIndexOf(), etc.
        - Interpolation
````javascript
    let fname= "A"; 
    let mname = "B";
    let lname = "C";

    let fulleName = fname + ' ' + mname + ' ' + lname;
    /* Interpolation
       ''.concate()
    */
    let fullNameInt = `${fname} ${mname} ${lname}`;

````
    - [] is Array
        - sort(), reverse(), reduce(), indexOf(),
        - push(), pop(), shift(), unshift()
        - filter(), forEach(), and map()
        - find()
    - new Date() Object for DateTime
    - Object
        - Everything is Object
        - assign()
            - Same as Deep Copy
        - create()
            - Like Clone()
        - Object Literal aka JSON Object
````javascript
    let obj = { x:10, y:20 };
````
        - keys() method
            - to read all keys of object into an array
````javascript
    let keys = Object.keys(obj);
    /* keys [x,y] */
    let values = Object.values(obj);
    /* values [10,20] */
````

````javascript
    let arr = [10,20,30];
    arr.push(40);
    /* Spread (...) Operator */
    arr = [...arr,50,60];

````

# Programming With Node.js
- Create a package.json
    - The 'npm' cli
    - Way to create package.json
        - npm init
            - Wizard for creating pcakage.json
        - npm init -y
            - create a package.json with defaults
        - The 'script' block for defining commands for Build, Run, and Test
        - The 'devDependencies' block
            - Contains standard Npde.js packages those are required during development
                - npm install --save-dev [PACKAGE-NAME]
        - The 'dependencies' block
            - Contains all packages those are required during execution / production of the application
                - npm install --save [PACKAGE-NAME] 
                - npm install [PACKAGE-NAME]
        - Installing packages at global scope
            - If you need packages for multiple Nopde.js apps on same machine
                - npm install --global [PACKAGE-NAME]
    - Running Node Application
        - node [NAME].js
    - IF using ES 6+ Packages for Application, then in package.json add 'types': 'module' to run the application
````javascript
    /* OLD Node.js Package Loader */
    let obj = require('PACKAGE-NAME'); /* Used by Standard JS aka Comman.js */
    /* ES 6+ JS Standards */

    import {Exported CLASSES/METHODS FROM PACKSGE} from 'PACKAGE-NAME'

````
# Node.js Standard Package
- Package for Web Server Creation
- Package for Accessing FIle System
    - Streaming and Buffering
- PAckage for IO Path
- Crypto, Security, OS, etc.

# Node.js Third-Party Packages
- Web Application Framework
    - Express with bodyparser
    - Feathers
    - Nest
    - ... and many more
- Security
    - JSON Web Token
    - OpenAuth
- Database
    - MongoDB and Mongoose
    - mssql
    - pgsql
    - mysql        
    - sequelize (ORM)
- GraphQL
- cors
- bodyParse (Not Required)    

# Node.js Programming
1. The Web Server using HTTP Module
- The http module
    - Foundation of HTTP Request Processing For Node.js Apps
    - Allows to create Http Server and Start listing
    - Capacilities to Read Header, Body, Url, and Method
- Web Server http Readable Stream Methods
````javascript
        /* close: the channel on which the request is received */
        on(event: 'close', listener: () => void): this;
        /* data: Start Reading Data default is butter */
        on(event: 'data', listener: (chunk: any) => void): this;
            /* drain: The Received data is complete and the Channel Butter is over */
        on(event: 'drain', listener: () => void): this;
        /* end: The Received data is complete and current request is over */
        on(event: 'end', listener: () => void): this;   
        /* error: Error While Processing data */
        on(event: 'error', listener: (err: Error) => void): this;

````



````javascript
var searchresponse = [{
  "order": [{
    "items": [{
        "route": "foo",
        "display": "foo",
        "employeeId": "ABC"
      },
      {
        "route": "bar",
        "display": "bar",
        "employeeId": "DEF"
      },
      {
        "route": "baz",
        "display": "baz",
        "employeeId": "GHI"
      },
      {
        "route": "qux",
        "display": "qux",
        "employeeId": "JKL"
      }
    ]
  }],
  "more": false
}];
 
var data1 = ["ABC", "DEF"];
var items = searchresponse[0].order[0].items;
var i = items.length;
while (i--) {
  if (data1.indexOf(items[i].employeeId) != -1) {
    items.splice(i, 1);
  }
}
console.log(searchresponse[0].order[0].items);
 

````