const http = require('http');
const host = "localhost";
const port = 3001

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","Content-Type");
    res.end('<html><body><h1>Hello World</h1><p>This is an HTML response.</p></body></html>');
});

server.listen(port,host,()=>{
    console.log('Server running at http://localhost:3001/')
});