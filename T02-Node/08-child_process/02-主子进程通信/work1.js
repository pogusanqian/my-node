// 向父进程发送消息
process.send({name: '子进程'});

// 获取父进程信息
process.on('message', (m) => {
  console.log('获取的父进程信息', m)
})

