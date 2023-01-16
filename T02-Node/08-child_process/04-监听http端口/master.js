const cp = require('child_process');
const net = require('net');

// 启动两个进程
const work1 = cp.fork('./work1.js');
const work2 = cp.fork('./work2.js');

// 创建父进程服务
const server = net.createServer();
server.listen(3000, () => {
  work1.send('server', server);
  work2.send('server', server);
  // 关掉主进程监听, 反而是子线程进行监听
  server.close();
});
