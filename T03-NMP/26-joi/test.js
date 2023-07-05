const Joi = require('joi');

const schema = Joi.array().items(Joi.number().positive());

const res = schema.validate([0]);
console.log(res);
