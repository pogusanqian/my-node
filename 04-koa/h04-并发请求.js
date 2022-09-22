const Koa = require('koa');
const KoaRouter = require('koa-router');
const sequelize = require('../22-sequelize/dao/models')
const DataHubDao = require('../22-sequelize/dao/DataHubDao');

const app = new Koa();
const router = new KoaRouter();

// 再并发请求下, 因为读和写没有成原子性, 在一个就是A请求在读取的时候, B请求也可能在读取
// 所以这里需要添加上事务, 并且事务不能并行执行(串行化设计太麻烦了)
router.get('/test', async (ctx) => {
  sequelize.transaction(async () => {
    const [stu] = await DataHubDao.querySql(`select * from t_student where f_id = 1 for update`);
    console.count(`============${stu.f_age}`);
    await DataHubDao.doSql(`update t_student set f_age = ${stu.f_age + 1} where f_id = 1`);
  });
  ctx.body = '成功';
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000, () => console.log('服务启动成功'));
