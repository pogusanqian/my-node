const koa = require('koa');
const xmlParser = require('koa-xml-body');
const { koaBody: bodyParser } = require('koa-body');

const app = new koa();

app.use(xmlParser({
  xmlOptions: {
    // 将子节点元素放在数组中
    explicitArray: false,
    // 忽略根目录
    explicitRoot: false,
    // 忽略所有XML属性, 仅创建文本节点
    ignoreAttrs: true,
    // 将第一个转换成小写
    firstCharLowerCase: true,
  }
}));
app.use(bodyParser());
app.use((ctx) => {
  ctx.body = ctx.request.body;
});

app.listen(3000);