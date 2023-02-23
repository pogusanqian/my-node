const Mock = require('mockjs');

const obj = Mock.mock({
  id: '@id',
  name: '@cname',
  email: '@email'
});

console.log(obj);


