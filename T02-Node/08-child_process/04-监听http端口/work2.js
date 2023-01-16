const http = require('http');

const server = http.createServer((req, res) => {
  for (let index = 0; index < 1000000; index++) { }
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello Work2 ${process.pid}`);
});

process.on('message', (m, tcp) => {
  if (m === 'server') {
    tcp.on('connection', (socket) => {
      server.emit('connection', socket);
    });
  }
});