const builder = require('xmlbuilder');

const createOption = {
  stringify: {
    name: (val) => {
      return val.charAt(0).toUpperCase() + val.slice(1);
    },
  }
};
const endOption = {
  pretty: true,
  allowEmpty: true,
};

const rootNode = builder.create('root', createOption);
rootNode.ele('name', '张三');
rootNode.ele('age', { disable: 1 }, 23);
rootNode.ele('email').text('pogusanqian@163.com');
rootNode.ele('address').dat('濮阳市').att('disable', '1');
// 注意这里会创建一个信息xml节点
rootNode.ele('address').att('disable', 1);
// 创建了一个对象节点
rootNode.ele({
  phonList: {
    phone: [
      { '#text': "555-1234", '@type': 'home' },
      { '#text': "555-1235", '@type': 'mobile' }
    ]
  }
});

const xml = rootNode.end(endOption);
console.log(xml);