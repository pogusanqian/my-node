const { QueryTypes } = require('sequelize');
const { localSequelize, netSequelize } = require('./models');
class DataHubDao {
  /**
   * 原生SQL查询
   * @param {*} sql 
   * @returns 
   */
  static async querySql(sql) {
    return await (islocal ? localSequelize : netSequelize).query(sql, { type: QueryTypes.SELECT });
  }
}

module.exports = DataHubDao;