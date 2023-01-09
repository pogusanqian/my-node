const router = require('koa-router')();
const FSUtil = require('../util/FSUtil');

// 设置router的前缀
router.prefix('/mykoa');

// 加载所有的子路由
FSUtil.getFilePathsAtDir(__dirname)
  .filter(item => item !== __filename)
  .forEach(item => router.use(require(item).routes()));

module.exports = router;
