/**
 * Student.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: { type: 'string', required: true, unique: true },
    age: { type: 'number', defaultsTo: 0 },
    sex: { type: 'number', defaultsTo: 1 },
  },
};

