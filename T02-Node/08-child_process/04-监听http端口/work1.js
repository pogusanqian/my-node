const http = require('http');

const server = http.createServer((req, res) => {
  for (let index = 0; index < 1000000; index++) { }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello Work1 ${process.pid}`);
});

// 接收父进程传递过来的子进程对象
process.on('message', (m, tcp) => {
  if (m === 'server') {
    tcp.on('connection', (socket) => {
      server.emit('connection', socket);
    });
  }
});