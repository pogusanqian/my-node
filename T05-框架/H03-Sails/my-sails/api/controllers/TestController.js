/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {

  getTxt: function (req, res) {
    res.send('HelloWorld');
  },

  getJson: function (req, res) {
    const stu = { name: '张三', age: 100 };

    // 默认响应头是text/html
    // res.set('Content-Type', 'application/json');
    // res.send(stu);

    // 简写方式
    res.json(stu);
  },

  getPort: function (req, res) {
    res.ok({
      prot: sails.config.port,
      sailsEnv: sails.config.environment,
      nodeEnv: process.env.NODE_ENV || '',
    });
  },

  test: function (req, res) {
    const actions = sails.getActions();
    res.ok('Hello World');
  }
};

