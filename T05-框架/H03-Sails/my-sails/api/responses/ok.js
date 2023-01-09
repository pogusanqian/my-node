// 重新封装ok方法, 可以用于reset蓝图响应
module.exports = function ok(data) {
  sails.log.info(data);
  this.res.json({
    code: 0,
    msg: '请求成功',
    data: data
  });
};