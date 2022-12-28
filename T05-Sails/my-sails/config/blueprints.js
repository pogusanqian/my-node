module.exports.blueprints = {
  // 是否开启蓝图自动路由, 1版本默认是false
  actions: true,

  // 开启之后, url便可以直接通过models来操作数据库
  rest: true,

  // 开始之后可以快速通过get请求实现增删改等操作, 如/student/create?name=koma&age=100
  shortcuts: true,

  // 蓝图路由前缀, 注意这里是不会影响router中的配置路由的
  // prefix: 'myblue',

  // rest请求路由前缀
  restPrefix: '/api/v1/dev'

};
