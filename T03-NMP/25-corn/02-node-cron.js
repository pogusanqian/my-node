const fs = require('fs');
const cron = require('node-cron');

cron.schedule('* * * * * *', () => {
  console.log('===========');
  // fs.appendFileSync('./dest.txt', '==========\n');
});

setTimeout(() => process.exit(1), 5 * 1000);
