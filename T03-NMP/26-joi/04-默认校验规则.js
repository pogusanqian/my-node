const Joi = require('joi');

const stu = {
  name: '张三',
  age: 11,
  sex: '男',
};

const custom = Joi.defaults((schema) => {
  switch (schema.type) {
    case 'string':
      return schema.allow('');
    case 'object':
      return schema.min(1);
    default:
      return schema;
  }
});

Joi.assert(stu, custom.object());
