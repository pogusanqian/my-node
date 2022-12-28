module.exports = {


  friendlyName: 'Get txt',

  // npx sails generate action demoaciton/getTxt
  // action路由中, 不建议使用驼峰命名法, 因为驼峰会被转换成横杠
  description: '获取文本信息',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    // 响应类型会自动处理
    return '你好, 世界';
  }


};
