const StudentRouter = require('koa-router')();
const StudentController = require('../../controller/StudentController');

StudentRouter.get('/getStudent', ctx => StudentController.getStudent(ctx));
StudentRouter.get('/getStudentSync', ctx => StudentController.getStudentSync(ctx));
StudentRouter.post('/transactionByNoHosting', ctx => StudentController.transactionByNoHosting(ctx));
StudentRouter.post('/transactionByHosting', ctx => StudentController.transactionByHosting(ctx));
StudentRouter.post('/transactionByCLS', ctx => StudentController.transactionByCLS(ctx));
StudentRouter.post('/insertStudent', ctx => StudentController.insertStudent(ctx));
StudentRouter.post('/getStudentByWhereIn', ctx => StudentController.getStudentByWhereIn(ctx));

module.exports = StudentRouter;
