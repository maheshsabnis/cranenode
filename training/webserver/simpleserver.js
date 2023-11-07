/* Import http module */
import http from 'http';
/* Create a Server */
/* Input parameter for the createServer() is 
 InputMessage and ServerResponse
*/
const server = http.createServer((req,resp)=>{
    resp.writeHead(200, {'Content-Type':'text/html'});
    resp.write('The Simple HTTP Node.js Server');
    resp.end();
});

/* Start Listening  */
server.listen(8070);
console.log('Server Started on port 8070');
