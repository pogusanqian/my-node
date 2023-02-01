const uuid = require('uuid');

console.log(uuid.v1());

console.log(uuid.v4({ offset: 8 }));