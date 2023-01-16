const cp = require('child_process');

const work = cp.fork('./work1.js');

// 通过send方法向子进程发送信息
work.send({name: '父进程'})

// 通过message事件获取子进程发送信息
work.on('message', (m) => {
  console.log('子进程传递过来的信息', m);
});
