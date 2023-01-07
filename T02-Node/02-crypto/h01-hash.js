const crypto = require('crypto');

// 第一个参数是hash方式, 第二个参数是盐
const hmac = crypto.createHmac('sha256', 'mysalt');
hmac.update('你好世界HelloWrold');
const hashStr = hmac.digest('hex');

console.log(hashStr);