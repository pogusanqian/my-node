const { fork } = require('child_process');

// 启动两个进程
fork('./work1.js');
fork('./work2.js');