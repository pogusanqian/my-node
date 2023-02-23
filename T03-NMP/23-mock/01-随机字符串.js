const Mock = require('mockjs');
const { Random } = Mock;

// 生成随机ID: 18位数字, 也可以使用Random进行生成
console.log(Mock.mock('@id'), Random.id());
// 生成随机名称: name表示英文名称, cname表示中文名称
console.log(Mock.mock('@cname'), Random.cname());
// 生成随机日期: 2018-06-10
console.log(Mock.mock('@date'));
// 生成图片url: ('长宽', '背景颜色' ,'字体颜色' ,' 显示文字')
console.log(Mock.mock("@image('20*20','red','blue','HelloWrold')"));
// 随机描述
// console.log(Mock.mock('@paragraph'));
// 随机IP
console.log(Mock.mock('@ip'));
// 随机Email
console.log(Mock.mock('@email'));


