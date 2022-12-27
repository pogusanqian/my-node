const bunyan = require('bunyan');

const log = bunyan.createLogger({ name: 'myapp' });

log.info('Hello World');
log.info(JSON.stringify({ name: 'lisi', age: 23 }));

