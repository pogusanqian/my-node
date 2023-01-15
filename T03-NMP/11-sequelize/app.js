global.islocal = true;
const DataHubDao = require('./dao/DataHubDao');

(async () => {
  const sql = `select * from t_city_map limit 1`;
  const res = await DataHubDao.querySql(sql);
  console.log(res)

  global.islocal = false;
  const res1 = await DataHubDao.querySql(sql);
  console.log(res1)
})();