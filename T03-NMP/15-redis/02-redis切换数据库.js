const redis = require('redis');

const client = redis.createClient({
  url: 'redis://192.168.124.10:6379',
  password: '123123',
});

async function getName() {
  await client.connect();
  const name = await client.get('name');
  await client.quit();
  return name;
}

(async () => {
  setInterval(async () => {
    console.log('=============', await getName());

    await client.connect();
    client.select(1);
    await client.quit();
  }, 1000);
})();