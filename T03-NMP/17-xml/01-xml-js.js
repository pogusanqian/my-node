const convert = require('xml-js');

var xml = `
<?xml version="1.0" encoding="UTF-8" ?>
<note>
<!--定义学生对象  这是一个注释-->
  <NaMe>张三</NaMe>
  <age>23</age>
  <age>24</age>
  <schools>河南理工</schools>
  <schools>北京理工</schools>
  <schools>清华大学</schools>
</note>
`;
const res1 = convert.xml2js(xml, {
  // 采用紧凑型输出
  compact: true,
  // 忽略comment注释
  ignoreComment: true,
  // 忽略Text内容
  ignoreText: false
});

const stu = {
  root: {
    name: {
      _text: '张三'
    },
    age: 23,
    schools: ['河南理工', '北京理工', '清华大学']
  }
};
const res2 = convert.js2xml(stu, { compact: true, spaces: 4 });

console.log(JSON.stringify(res1));
console.log(res2);