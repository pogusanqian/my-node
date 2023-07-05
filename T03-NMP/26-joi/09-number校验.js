const Joi = require('joi');

const schema = Joi.string().required().allow('');
const res = schema.validate('1');

console.log(res)