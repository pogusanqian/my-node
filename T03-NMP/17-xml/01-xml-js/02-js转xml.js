const convert = require('xml-js');

const json = {
  'regInfoTime': '1493802128',
  'hostCode': '00021-7BB75273CD',
  'PCName': {
    _cdata: 'tq-f26c201d54d8'
  },
  'IP': '192.168.43.32',
  'MAC': '00:0C:29:28:68:7E',
  'unitId': 'C27771519FA944758BC21B8D29218634',
  'unitName': {
    _cdata: '万里红科技公司'
  },
  'deptId': 11,
  'deptName': {
    _cdata: '研发一部'
  },
  'empId': 1,
  'empName': {
    _cdata: '刘勤才'
  },
  'secLvl': 3,
  'HDCode': 'W3TCRYJR',
  'extHdCode': 'U3TCRYJR,V3TCRYJR',
  'ver': 'V2.0',
  'arch': 'amd64',
  'vendor': 'zhongfu',
  'OS': {
    _cdata: 'Centos Linux 7 (Core)'
  },
  'comment': {
    _cdata: '备注'
  },
  'hostType': 0,
  'machine': '05',
  'passWordmd5': 'aclec964bdc163040552392e0307dd40',
  'addressInfo': '山东省-济南市-历下区',
  'isAdmin': 0,
  'addressList': {
    addressInfo: [
      {
        'IP': '1.1.1.3',
        'subMask': '255.255.255.0',
        'gateWay': '1.1.1.1',
        'MAC': '00:0C:29:28:68:7E'
      }
    ]
  },
  'accountList': {
    accountInfo: [
      {
        'account': 'root'
      }
    ]
  }
};

const xml = convert.js2xml({
  _declaration: {
    _attributes: {
      version: '1.0',
      encoding: 'UTF-8'
    }
  },
  root: { ...json }
}, {
  // 按紧凑格式转换, 默认是false
  compact: true,
  // 缩进空格数, 默认是false
  spaces: '  ',
  // 为空启用双目标签
  fullTagEmptyElement: true,
  // 忽略注释
  ignoreComment: true,
  // 忽略分析声明
  // ignoreDeclaration: true,
  // 忽略元素的解析文档类型
  ignoreDoctype: true,
  // xml表填的首字母转换成大写
  elementNameFn: (val) => val.charAt(0)
    .toUpperCase() + val.slice(1)
});

console.log(xml);

