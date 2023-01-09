module.exports = function badRequest(err) {
  sails.log.error(err);
  this.res.json({
    code: -400,
    msg: 'BadRequest'
  });
};