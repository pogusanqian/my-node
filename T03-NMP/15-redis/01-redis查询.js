const redis = require('redis');

// 创建连接对象
const client = redis.createClient({
  url: 'redis://192.168.124.10:6379',
  password: '123123',
});
// 创建error事件(可用可无)
client.on('error', (err) => console.log('=================', err));
client.on('end', (err) => console.log('=================quit断开连接=========='));


(async () => {
  // 建立连接
  await client.connect();

  // 操作数据
  await client.set('name', '张三');
  console.log(await client.get('name'));

  // 释放连接
  client.quit();
})();
