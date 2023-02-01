const { XMLParser } = require('fast-xml-parser');

const xmlDataStr = `<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <NaMe haha="aaaa"> 张 三 </NaMe>
  <age>23</age>
  <schools>河南理工</schools>
  <schools>北京理工</schools>
  <schools>清华大学</schools>
  <friends>
    <name>李四</name>
    <age>24</age>
  </friends>
  <friends>
    <name>王五</name>
    <age>25</age>
  </friends>
  <address>
    ssss<contry>中国</contry>
    <city>濮阳</city>
  </address>
  <h1>true</h1>
</root>`;

const options = {
  // 忽略属性
  ignoreAttributes: true,
  // 忽略xml声明, 即<?xml version="1.0" encoding="UTF-8" ?>
  ignoreDeclaration: true,
  // 忽略空格
  trimValues: true,
  // tagName处理
  transformTagName: (tagName) => tagName.slice(0, 1).toLowerCase().concat(tagName.slice(1)),
  // 关闭实体功能
  processEntities: false
};
const parser = new XMLParser(options);
console.log(parser.parse(xmlDataStr));