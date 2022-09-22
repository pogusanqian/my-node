/**
 * 需求: 读取文件A和文件B之后再往数据库中插入数据; 然后再调用一个http接口(http与读取文件时没有任何关系的)
 * 回调: 如果多个回调之间进行协同工作的话, 会出现回调地狱
 */

const fs = require('fs');
const fsProm = require('fs/promises');
const { sync } = require('svg2png');

function fun1() {
  let flag = 0;
  fs.readFile('30-node特性/h01-异步并行io.js', 'utf-8', (err, data) => {
    if (++flag == 2) {
      console.log('插入数据库1');
    }
  });
  fs.readFile('30-node特性/h02-回调和async比较.js', 'utf-8', (err, data) => {
    if (++flag == 2) {
      console.log('插入数据库1');
    }
  });
  console.log('调用http接口1');
}

// fun2的性能要小院fun1, 因为fun2再读取文件时, 会被fun1阻塞
function fun2() {
  fs.readFile('30-node特性/h01-异步并行io.js', 'utf-8', (err, data) => {
    fs.readFile('30-node特性/h02-回调和async比较.js', 'utf-8', (err, data) => {
      console.log('插入数据库2');
    });
  });

  console.log('调用http接口2');
}

// fun3的性能和fun2一样
async function fun3() {
  await fsProm.readFile('30-node特性/h01-异步并行io.js', 'utf-8');
  await fsProm.readFile('30-node特性/h02-回调和async比较.js', 'utf-8');
  console.log('插入数据库3');
}

(async () => {
  await fun3();
  console.log('调用http3')
})()
