const fs = require('fs');
const schedule = require('node-schedule');

// 当主线程关闭时, 定时器线程会自动关闭; 可以使用job.cancel()手动取消; 定时器的异常会使Node主线程崩溃
const job = schedule.scheduleJob('* * * * * *', () => {
  console.log('===========');
  // fs.appendFileSync('./dest.txt', '==========\n');
  throw Error('自定义异常');
});

setInterval(() => {
  console.log('setTimeout定时器执行');
}, 1000);

setTimeout(() => process.exit(1), 5 * 1000);
