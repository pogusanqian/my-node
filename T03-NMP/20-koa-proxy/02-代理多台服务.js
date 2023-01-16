const koa = require('koa');
const proxy = require('koa-proxy');
const { koaBody } = require('koa-body');

// 创建代理服务器
const app = new koa();
app.use(proxy({
  match: '/server1',
  host: 'http://localhost:3001'
}));
app.use(proxy({
  match: '/server2',
  host: 'http://localhost:3002'
}));
app.listen(3000);

// 创建目标服务器
const app1 = new koa();
app1.use(koaBody());
app1.use(ctx => {
  console.log(ctx.query);
  console.log(ctx.request.body);
  ctx.body = 'Hello 3001';
});
app1.listen(3001);

const app2 = new koa();
app2.use(koaBody());
app2.use(ctx => {
  console.log(ctx.query);
  console.log(ctx.request.body);
  ctx.body = 'Hello 3002';
});
app2.listen(3002);

