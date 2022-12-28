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
  }
};

