const Joi = require('joi');

const stu = {
  name: '张三',
  age: 11,
  sex: '100',
  isBoolean: undefined,
  email: ''
};

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  sex: Joi.number().integer().required(),
  isBoolean: Joi.boolean().allow(null),
  email: Joi.string().email().allow('')
});

// joi会自动将字符串的数字转换成数字类型
// 字符串类型不能是空字符串
// 允许是null的情况, 也允许undefiend
const res = schema.validate(stu);
console.log(res.value);
console.log(res.error);
