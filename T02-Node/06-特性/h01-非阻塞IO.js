/**
 * 非阻塞IO: IO逻辑并不影响后面逻辑的运行
 * 需求: 读取三个文件, 并且往数据库中插入一条数据(或者其他运算)
 * java: 可以发现往数据库中插入数据和读取文件是没有任何关系的, 如果在java单线程处理的话, 插入数据的逻辑会被三个读取文件进行阻塞
 *      而且读取文件2时, 会被文件1阻塞; 读取文件1时, 会被文件1和文件2阻塞, java中可以直接开启四个Thred线程来处理(太麻烦)
 * 回调: 采用了事件循环, 可以进行并行IO读取, 而且在IO读取的时候, I/O后面的逻辑还是可以进行执行
 */

const fs = require('fs');

fs.readFile('30-node特性/h01-异步并行io.js','utf-8', (err, data) => {
  console.log(data)
});
fs.readFile('30-node特性/h02-回调和async比较.js', 'utf-8', (err, data) => {
  console.log(data)
});

console.log('往数据库中插入数据');