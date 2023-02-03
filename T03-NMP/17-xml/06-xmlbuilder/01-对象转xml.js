const builder = require('xmlbuilder');

const createOption = {
  stringify: {
    // 首字母大写: 将<schoolId>转换成<SchoolId>
    name: (val) => val.charAt(0).toUpperCase() + val.slice(1),
  }
};
const endOption = {
  // 格式化输出字符串
  pretty: true,
  // 为空时, 是否使用双目标签, 默认时false
  allowEmpty: true,
  // 格式化空格个数
  indent: '  ',
  // 换行符
  newline: '\n',
  // 如果大于0, 元素属性将多行展示
  width: 0,
  // 设置<?xml version="1.0"   ?>问号之前的空格数, 默认时0
  spacebeforeslash: '  '
};

const xml = builder.create({
  root: {
    '@encoding': 'UTF-8',
    '@url': 'http://baidu.com',
    name: '张三',
    age: 23,
    shcoolList: [
      { name: '河南理工大学', address: '焦作市', '@haha': '哈哈', },
      { name: '清华大学', address: '北京市' },
    ],
    friendList: [],
    phone: '',
  }
}, createOption).end(endOption);
console.log(xml);