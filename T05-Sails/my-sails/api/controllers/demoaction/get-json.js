module.exports = {


  friendlyName: 'Get json',


  description: '获取JSON类型',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    // 响应文本自动处理成了: application/json;
    return { name: '河南理工', address: '焦作市' };
  }


};
