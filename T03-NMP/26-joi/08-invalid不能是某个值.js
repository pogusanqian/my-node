const Joi = require('joi');

// 字符串不能是张三和李四
const schema = Joi.string().invalid('张三', '李四');
const res = schema.validate('张三');

console.log(res);
