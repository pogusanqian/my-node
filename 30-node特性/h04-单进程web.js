const http = require('http');
const sequelize = require('../22-sequelize/dao/models');
const DataHubDao = require('../22-sequelize/dao/DataHubDao');

const server = http.createServer(async (req, res) => {
  sequelize.transaction(async () => {
    const [stu] = await DataHubDao.querySql(`select * from t_student where f_id = 1 for update`);
    await DataHubDao.doSql(`update t_student set f_age = ${stu.f_age + 1} where f_id = 1`);
  });
  res.end('成功');
});

server.listen(3000, () => console.log('服务器启动成功'));