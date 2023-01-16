const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello Work1 ${process.pid}`);
});

process.on('message', (m, tcp) => {
  if (m === 'server') {
    tcp.on('connection', (socket) => {
      server.emit('connection', socket);
    });
  }
});