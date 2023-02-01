const Koa = require('koa');
const { koaBody } = require('koa-body');
const convert = require('xml-js');

const app = new Koa();

app.use(koaBody());
app.use(async (ctx, next) => {
  if (ctx.header["content-type"] == 'text/plain') {
    ctx.request.body = convert.xml2js(ctx.request.body, { compact: true, ignoreComment: true });
  }
  await next();
});
app.use(async (ctx) => {
  ctx.body = ctx.request.body;
});

app.listen(3000);