const xml2js = require('xml2js');

(async () => {
  const parser = new xml2js.Parser({
    // 将子节点元素放在数组中
    explicitArray: false,
    // 忽略根目录
    explicitRoot: false,
    // 忽略所有XML属性, 仅创建文本节点
    ignoreAttrs: true,
    // 忽略空格
    trim: true,
    // 全都设置成小写
    normalizeTags: true
  });

  // xml转换成json
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<root>
  <NaMe>   张三   </NaMe>
  <age>23</age>
  <schools>sss</schools>
  <schools>北京理工</schools>
  <schools>清华大学</schools>
</root>`;
  const res = await parser.parseStringPromise(xml);
  console.log(res);


  // js转换成xml
  const stu = { name: '张三', age: '23', schools: ['河南理工', '北京理工', '清华大学'] };
  const builder = new xml2js.Builder();
  const res2 = builder.buildObject({ root: stu });
  console.log(res2);
})()

