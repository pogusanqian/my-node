const net = require('net');

const server = net.createServer(socket => {
  // 客户端发送请求时, 会路由到此方法中进行处理
  socket.on('data', data => {
    console.log('===========', data);
    socket.write('Hello Wrold');
  });

  socket.on('end', data => {
    console.log('===========连接断开=========', data);
  });

  socket.write('socket start')
});

// 启动端口, 可以在cmd中telnet 127.0.0.1 3000建立于服务器的连接
server.listen(3000, '127.0.0.1', function () {
  console.log('http//127.0.0.1:3000 启动Socket服务器');
});