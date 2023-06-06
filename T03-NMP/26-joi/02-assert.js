const Joi = require('joi');

const value = '100';
// 如果没有通过校验, 直接就抛出了异常
const res = Joi.assert(value, Joi.number(), '必须是数字类型');

console.log('=========', res);
console.log('=========', value, typeof value);

console.log(Joi.version);
