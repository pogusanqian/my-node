module.exports.blueprints = {
  // 所有通过蓝图路由的公共前缀
  // prefix: '/myblue',

  // rest请求路由前缀(只影响resetful风格)
  restPrefix: '/api/v1/dev',

  // 是否开启action自动路由; 关闭之后并不影响reset蓝图路由
  actions: true,

  // 是否开启reset自动路由, 开启后直接操作Mode进行数据库增删改查, 不在走Controller; 关闭之后并不影响actions蓝图路由
  rest: true,

  // 开始之后可以快速通过get请求实现增删改等操作, 如/student/create?name=koma&age=100
  shortcuts: false,
};
