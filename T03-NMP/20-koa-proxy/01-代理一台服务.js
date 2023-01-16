const koa = require('koa');
const proxy = require('koa-proxy');

// 创建代理服务器
const app = new koa();
app.use(proxy({ host: 'http://localhost:3001' }));
app.listen(3000);

// 创建目标服务器
const app1 = new koa();
app1.use(ctx => ctx.body = 'Hello 3001');
app1.listen(3001)

