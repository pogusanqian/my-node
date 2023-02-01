const { XMLBuilder } = require('fast-xml-parser');

const student = {
  name: '张三',
  age: 23,
  shcools: [
    { name: '河南理工大学', address: '焦作市' },
    { name: '北京大学', address: '北京市' },
  ],
  sex: [],
  haha: ''
};

const options = {
  // 将生成的XML进行格式化
  format: true,
  // 关闭实体功能
  processEntities: false,
};
const xmlbuilder = new XMLBuilder(options);
console.log(xmlbuilder.build(student));