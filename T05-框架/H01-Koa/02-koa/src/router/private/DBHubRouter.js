const DBHubRouter = require('koa-router')();
const DBHubController = require('../../controller/DBHubController');

DBHubRouter.all('/dbhub/doSQL', ctx => DBHubController.doSQL(ctx));
DBHubRouter.get('/dbhub/:tableName', ctx => DBHubController.getDate(ctx));
DBHubRouter.post('/dbhub/:tableName', ctx => DBHubController.insertDate(ctx));
DBHubRouter.post('/dbhub/:tableName/insertOrUpdateByDublicateKey', ctx => DBHubController.insertOrUpdateByDublicateKey(ctx));

module.exports = DBHubRouter;
