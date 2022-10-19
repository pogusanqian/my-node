const redis = require('redis');

/**
 * 由于node是单线程的, redis也是单线程的, 通常情况下在node中是不用使用redis连接池的
 */
const client = redis.createClient({
  url: 'redis://192.168.124.10:6379',
  password: '123123',
});

(async () => {
  await client.connect();
  setInterval(async () => console.log('=============', await client.get('name')), 1000);
})();