const { QueryTypes } = require('sequelize');
const sequelize = require('./models');
const SQLUtil = require('../util/SQLUtil');

const { studentModel } = sequelize.models;

class StudentDao {
  /**
   * 获取数据
   * @returns {Promise<Model<TModelAttributes, TCreationAttributes>[]>}
   */
  static async getStudent() {
    return await studentModel.findAll();
  }

  /**
   * 非托管事务, 注意这个事务不需要cls命名空间
   * 就算事务出错了, 但是自增主键的的id还是会正常增长的
   * @param student
   * @returns {Promise<string>}
   */
  static async transactionByNoHosting(student) {
    const transaction = await sequelize.transaction();
    try {
      // 手动提交事务, 注意transcation参数一定要填, 不然就会失效, 这里所有的事务操作必须是同步的, 不然异步异常捕获不到
      await studentModel.create(student, { transaction });
      await studentModel.create(student, { transaction });
      await transaction.commit();
      return '插入数据成功';
    } catch (e) {
      await transaction.rollback();
      return '插入数据失败';
    }
  }

  /**
   * 自动提交事务
   * @param student
   * @returns {Promise<void>}
   */
  static async transactionByHosting(student) {
    await sequelize.transaction(async (transaction) => {
      await studentModel.create(student, { transaction });
      await studentModel.create(student, { transaction });
    });
  }

  /**
   * CLS提交事务
   * @param student
   * @returns {Promise<void>}
   */
  static async transactionByCLS(student) {
    await sequelize.transaction(async () => {
      await studentModel.create(student);
      await studentModel.create(student);
    });
  }

  /**
   * 插入数据
   * @param student
   * @returns {Promise<Model<TModelAttributes, TCreationAttributes>[]>}
   */
  static async insertStudent(student) {
    if (Array.isArray(student)) {
      return await studentModel.bulkCreate(student);
    }
    return await studentModel.create(student);
  }

  /**
   * 插入数据
   * @param student
   * @returns {Promise<Model<TModelAttributes, TCreationAttributes>[]>}
   */
  static async getStudentByWhereIn(student) {
    const fieldArr = ['name', 'age', 'sex', 'schoolId'];
    const sql = `select * from t_student where concat_ws('_',f_name, f_age, f_sex, f_school_id) in ${SQLUtil.getInValues(student, fieldArr)}`;
    return await sequelize.query(sql, { type: QueryTypes.SELECT });
  }
}

module.exports = StudentDao;
