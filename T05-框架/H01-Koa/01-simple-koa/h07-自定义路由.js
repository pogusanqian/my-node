const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

async function a1Handler(ctx, next) {
  if (ctx.header.type == 'A1') { // A1规范
    ctx.body = 'A1规范数据';
  } else { // 正常逻辑                                           
    next();
  }
}

router.get('/getData', ctx => ctx.body = 'Hello World');

app.use(a1Handler);
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => console.log('启动成功'));
