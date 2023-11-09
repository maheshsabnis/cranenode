import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';

// 2. Lets read the server path
let __serverPath = fileURLToPath(import.meta.url);

const instance = express();
/* Front-End PORT */
const port = process.env.PORT || 9004;
/* CSS and  jQuery*/
instance.use(
    express.static(path.join(__serverPath, './../node_modules/bootstrap/dist/css'))
);
instance.use( 
    express.static(path.join(__serverPath,'./../node_modules/jquery/dist'))
);


// 7. Use Express Request Processing Methods
instance.get('/', (req,resp)=>{
    resp.sendFile('index.html', {
        root: path.join(__serverPath,'./../') // root is a server root
    });
});


instance.listen(port,()=>{
    console.log(`Front-End App Host is available on port : ${port}`);
});


