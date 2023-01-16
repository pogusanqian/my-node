const http = require('http');
const httpProxy = require('http-proxy');
const koa = require('koa');
const { koaBody } = require('koa-body');

// 创建代理服务器, 使用3000端口代理3001服务
const proxy = httpProxy.createProxyServer();
http.createServer(function (req, res) {
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  if (pathname == '/server1') {
    proxy.web(req, res, { target: 'http://localhost:3001' });
  } else {
    proxy.web(req, res, { target: 'http://localhost:3002' });
  }
}).listen(3000);

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