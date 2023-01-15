const net = require('net');

const server = net.createServer();

// 监听连接会话
server.on('connection', socket => {
  socket.on('data', data => {
    console.log('============', data);
    socket.write(Buffer.from(`="${data.toString()}"  `));
  });
  socket.write('scoket start');
});

// 启动端口, 可以在cmd中telnet 127.0.0.1 3000建立于服务器的连接
server.listen(3000, '127.0.0.1', function () {
  console.log('http//127.0.0.1:3000 启动Socket服务器');
});