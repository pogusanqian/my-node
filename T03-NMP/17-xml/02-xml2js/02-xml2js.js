const xml2js = require('xml2js');

const xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<root>
  <NaMe>张三</NaMe>
  <age>23</age>
  <schools>河南理工</schools>
  <schools>北京理工</schools>
  <schools>清华大学</schools>
  <Address><![CDATA[濮阳市]]></Address>
  <frendList>
    <friendItem>
      <name>李四</name>
      <age>24</age>
    </friendItem>
    <friendItem>
      <name>王五</name>
      <age>25</age>
    </friendItem>
  </frendList>
  <haha disable="1" show="1"><ss>哈哈</ss></haha>
</root>`;

const stu = {
  name: '张三',
  age: '23',
  schools: ['河南理工', '北京理工', '清华大学'],
  friends: [
    { name: '李四', age: 24 },
    { name: '王五', age: 25 },
  ],
  address: {
    contry: '中国',
    city: '濮阳',
  },
  sex: '',
  haha: []
};

(async () => {
  // xml转换成json
  const parser = new xml2js.Parser({
    // 将子节点元素放在数组中
    explicitArray: false,
    // 忽略根目录
    explicitRoot: false,
    // 忽略所有XML属性, 仅创建文本节点
    // ignoreAttrs: true,
    // 忽略空格
    trim: true,
    // 开启严格模式
    strict: true,
    // 配置处理器
    tagNameProcessors: [xml2js.processors.firstCharLowerCase],
    valueProcessors: [xml2js.processors.parseNumbers, xml2js.processors.parseBooleans]
  });
  const res = await parser.parseStringPromise(xml);
  console.log(res);

  // js转换成xml
  const builder = new xml2js.Builder({ rootName: 'root' });
  const res2 = builder.buildObject(stu);
  console.log(res2);
})()

