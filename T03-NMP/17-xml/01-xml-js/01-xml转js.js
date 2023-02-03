const convert = require('xml-js');

var xml = `
<?xml version="1.0" encoding="UTF-8" ?>
<Root>
  <Name>张三</Name>
  <Age>23</Age>
  <SchoolList>
    <SchoolInfo>
      <Name>河南理工</Name>
      <Address>焦作市</Address>
    </SchoolInfo>
    <SchoolInfo>
      <Name>清华大学</Name>
      <Address>北京市</Address>
    </SchoolInfo>
  </SchoolList>
  <Address><![CDATA[濮阳市]]></Address>
  <Phone></Phone>
  <Police disable="1" type="23.0"></Police>
</Root>
`;
const unNormalJson = convert.xml2js(xml, {
  // 修剪空格
  trim: true,
  // 采用紧凑型输出
  compact: true,
  // 忽略注释
  ignoreComment: true,
  // 忽略分析声明
  // ignoreDeclaration: true,
  // 忽略元素的解析文档类型
  // ignoreDoctype: true,
  // element名称转换
  elementNameFn: (val) => val.charAt(0).toLowerCase() + val.slice(1)
});

console.log(unNormalJson);
