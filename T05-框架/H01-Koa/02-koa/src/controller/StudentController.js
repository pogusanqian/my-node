const StudentDao = require('../dao/StudentDao');

class StudentController {
  static async getStudent(ctx) {
    ctx.body = await StudentDao.getStudent();
  }

  /**
   * 异步获取学生信息, 这种写法客户端获取不到任何信息的
   * 因为koa采用的时洋葱模型, ctx会直接返回给下一个组件, 但是我们ctx设置值是在回调函数中设置的, 所以ctx其实没有任何值
   * @param {*} ctx 
   */
  static getStudentSync(ctx) {
    StudentDao.getStudent()
      .then(data => {
        console.log(ctx)
        console.log("data:==========", data)
        ctx.body = data;
      }).catch(err => {
        console.error(err);
      });
      ctx.body = "Hello World"
  }

  static async transactionByNoHosting(ctx) {
    ctx.body = await StudentDao.transactionByNoHosting(ctx.request.body);
  }

  static async transactionByHosting(ctx) {
    ctx.body = await StudentDao.transactionByHosting((ctx.request.body));
  }

  static async transactionByCLS(ctx) {
    ctx.body = await StudentDao.transactionByCLS((ctx.request.body));
  }

  static async insertStudent(ctx) {
    ctx.body = await StudentDao.insertStudent((ctx.request.body));
  }

  static async getStudentByWhereIn(ctx) {
    ctx.body = await StudentDao.getStudentByWhereIn((ctx.request.body));
  }
}

module.exports = StudentController;
