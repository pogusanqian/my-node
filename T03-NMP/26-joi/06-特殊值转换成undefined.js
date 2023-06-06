const Joi = require('joi');

// 李四被转换成了null
const schema = Joi.string().empty('李四');
const res = schema.validate('李四');

console.log(res);
