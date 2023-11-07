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


