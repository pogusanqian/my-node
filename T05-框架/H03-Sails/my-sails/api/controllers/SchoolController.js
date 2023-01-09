/**
 * SchoolController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async addSchool(req, res) {
    // 这里的School对象没有引入, 而是直接使用
    res.send(await School.create(req.body).fetch());
  },

  async getSchools(req, res) {
    res.send(await School.find());
  },

  async getSchoolByName(req, res) {
    // 如果查询的参数是null, 表示查询null值, 如果是undefined相当于true, 
    res.send(await School.find({ name: req.query.name }));
  }

};

