const Joi = require('joi');

const value = '100';
// 如果没有通过校验, 直接就抛出了异常
const res = Joi.attempt(value, Joi.number(), '参数错误: ');

console.log('=========', res, typeof value);
console.log('=========', value, typeof value);

