var xml2js = require('xml2js');
var fs = require('fs');

var parser = new xml2js.Parser({
  explicitArray: false,
  ignoreAttrs: false
});

var cBuilder = new xml2js.Builder({
  cdata: true
});

const result = cBuilder.buildObject({ HeadLine: '张三', keyword: '你好' });

console.log(result);