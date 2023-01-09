const convert = require('xml-js');

var xml = `
<?xml version="1.0" encoding="UTF-8" ?>
<note>
<!--定义学生对象  这是一个注释-->
  <name>张三</name>
  <age>23</age>
  <age>24</age>
  <schools>河南理工</schools>
  <schools>北京理工</schools>
  <schools>清华大学</schools>
</note>
`;
// 生成的json对象属性一直放在_text中提取不出来
const res1 = convert.xml2js(xml, { compact: true, ignoreComment: true});


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