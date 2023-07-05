const Joi = require('joi');

const value = '100';
// 如果没有通过校验, 直接就抛出了异常
Joi.assert(value, Joi.number());

console.log('=========', value, typeof value);

