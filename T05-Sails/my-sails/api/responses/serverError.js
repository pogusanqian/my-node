
module.exports = function serverError(err) {
  sails.log.error(err);
  this.res.json({
    code: -500,
    msg: '服务器错误'
  });
};
