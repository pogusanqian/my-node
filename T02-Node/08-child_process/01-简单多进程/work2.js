const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello 3002');
});

server.listen(3002, () => console.log('3001端口启动成功'));