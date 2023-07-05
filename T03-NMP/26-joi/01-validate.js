const Joi = require('joi');

const stu = {
  name: '张三',
  age: 11,
  sex: '100',
  isBoolean: null,
  email: 'aaa@163.com'
};

const schema = Joi.object({
  name: Joi.string(),
  age: Joi.number(),
  sex: Joi.number(),
  isBoolean: Joi.boolean().allow(null).required(),
  email: Joi.string().email().allow('')
});

// joi会自动将字符串的数字转换成数字类型
// 字符串类型不能是空字符串
// 如果没有设置required, 则属性可以是undefined
const res = schema.validate(stu);
console.log(res.value);
console.log(res.error);
