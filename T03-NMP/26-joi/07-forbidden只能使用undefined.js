const Joi = require('joi');

// forbidden只允许使用undefined
const schema = Joi.string().forbidden();
const res = schema.validate(undefined);

console.log(res);
