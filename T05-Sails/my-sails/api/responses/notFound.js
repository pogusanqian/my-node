module.exports = function notFound(err) {
  sails.log.error(err);
  this.res.json({
    code: -404,
    msg: '找不到路径'
  });
};
