const fs = require('fs');
const dayjs = require('dayjs');


console.log(fs.existsSync('T02-Node/01-commonJS/h01-Student1.js'));


// const stat = fs.statSync('T02-Node/01-commonJS/h01-Student1.js');
// console.log(stat);
// console.log('创建时间: ', stat.birthtimeMs);
// console.log('修改时间(文件状态): ', stat.ctime);
// console.log('修改时间(文件内容): ', stat.mtime);
// console.log('访问时间: ', stat.atime);
