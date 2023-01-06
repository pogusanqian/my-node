/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

const preFix = '';
module.exports.routes = {
  // 配置controller路由
  [`GET ${preFix}/getTxt`]: 'TestController.getTxt',
  [`GET ${preFix}/getJson`]: 'TestController.getJson',

  // 配置restful路由; 修改操作需要使用patch路径
  [`GET ${preFix}/testblue`]: 'student.find',
  [`GET ${preFix}/testblue/:id`]: 'student.findone',
  [`POST ${preFix}/testblue`]: 'student.create',
  [`PATCH ${preFix}/testblue/:id`]: 'student.update',
  [`DELETE ${preFix}/testblue/:id`]: 'student.destroy',
};
