const Mock = require('mockjs');

// 生成一个100长度的数组, 并且年龄从1递增
const data = Mock.mock({
  'users|100': [ // |1-100: 表示生成的数组长度在1到100之间
    {
      'name': '@cname',
      'age|+1': 1, // 年龄递增
      'hobbits|1': ['游泳', '爬山', '跑步'], // 取其中一个
    }
  ]
});
// 输出结果
console.log(data.users);
