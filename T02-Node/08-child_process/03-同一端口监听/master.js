const cp = require('child_process');
const net = require('net');

// 启动两个进程
const work1 = cp.fork('./work1.js');
const work2 = cp.fork('./work2.js');

// 创建父进程服务
const server = net.createServer();
server.on('connection', (socket) => {
  socket.end('主进程响应数据');
});

server.listen(3000, () => {
  // 将socket发送给子进程
  work1.send('server', server);
  work2.send('server', server);
});
