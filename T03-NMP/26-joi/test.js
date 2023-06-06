const Joi = require('joi');

const schema = Joi.string().min(3).max(5);
const res = schema.validate('ssssssssssssssssssssssss');

console.log(res);
