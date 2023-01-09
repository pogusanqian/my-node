const testRouter = require('koa-router')();
const TestController = require('../../controller/TestController');

testRouter.get('/getText', ctx => TestController.getText(ctx));
testRouter.get('/getJson', ctx => TestController.getJson(ctx));
testRouter.get('/getMyself', ctx => TestController.getMyself(ctx));
testRouter.post('/getBody', ctx => TestController.getBody(ctx));
// 这里单独添加一个rest固定前缀比较好
testRouter.all('/restful/:dataBase/:tableName', ctx => TestController.resetful(ctx));
testRouter.get('/syncError', ctx => TestController.syncError(ctx));
testRouter.get('/asyncErrorAtPromise', ctx => TestController.asyncErrorAtPromise(ctx));
testRouter.get('/asyncErrorAtSetTimeOut', ctx => TestController.asyncErrorAtSetTimeOut(ctx));
testRouter.all('/setCookie', ctx => TestController.setCookie(ctx));
testRouter.all('/getCookie', ctx => TestController.getCookie(ctx));
testRouter.all('/locationBaidu', ctx => TestController.locationBaidu(ctx));
testRouter.all('/doSQLInTimer', ctx => TestController.doSQLInTimer(ctx));
testRouter.all('/cache', ctx => TestController.cache(ctx));
testRouter.all('/getStateCode', ctx => TestController.getStateCode(ctx));
testRouter.all('/getStateCodeByThrow', ctx => TestController.getStateCodeByThrow(ctx));
testRouter.all('/decrNum', ctx => TestController.decrNum(ctx));

module.exports = testRouter;
