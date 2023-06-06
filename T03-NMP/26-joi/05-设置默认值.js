const Joi = require('joi');

const schema = Joi.string().default('张三');
// undefined表示没有值, 可以设置默认值; null就表示空值, 是不能在设置默认值
const res = schema.validate(undefined);
console.log(res);
