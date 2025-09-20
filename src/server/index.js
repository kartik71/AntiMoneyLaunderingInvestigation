// Placeholder runtime for Anti Money Laundering Investigation
import http from 'http';
const port = process.env.PORT || 3000;
http.createServer((req,res)=>{res.end('OK');}).listen(port,()=>console.log('Listening',port));