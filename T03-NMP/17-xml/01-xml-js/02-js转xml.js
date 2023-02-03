const convert = require('xml-js');

const json = {
  root: {
    name: {
      _text: "张三",
    },
    age: {
      _text: "23",
    },
    schoolList: {
      schoolInfo: [
        {
          name: {
            _text: "河南理工",
          },
          address: {
            _text: "焦作市",
          },
        },
        {
          name: {
            _text: "清华大学",
          },
          address: {
            _text: "北京市",
          },
        },
      ],
    },
    address: {
      _cdata: "濮阳市",
    },
    phone: {
    },
    police: {
      _attributes: {
        disable: "1",
        type: "23.0",
      },
    },
  },
};

const stu = {
  name: '张三',
  age: 23,
  schoolList: {
    shcoolInfo: [
      {name: '河南理工大学', address: '焦作市'},
      {name: '清华大学', address: '北京市'},
    ]
  },
  phone: ''
}
const xml = convert.js2xml(stu, {
  // 按紧凑格式转换, 默认是false
  compact: true,
  // 缩进空格数, 默认是false
  spaces: '  ',
  // 为空启用双目标签
  fullTagEmptyElement: true,
  // 忽略注释
  ignoreComment: true,
  // 忽略分析声明
  ignoreDeclaration: true,
  // 忽略元素的解析文档类型
  ignoreDoctype: true,
  // xml表填的首字母转换成大写
  elementNameFn: (val) => val.charAt(0).toUpperCase() + val.slice(1)
});

console.log(xml);
