const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello 3001');
});

server.listen(3001, () => console.log('3002端口启动成功'));