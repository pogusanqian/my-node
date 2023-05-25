const crypto = require('crypto');

const hmac = crypto.createHash('md5');
hmac.update('你好世界HelloWrold');
const hashStr = hmac.digest('hex');

console.log(hashStr);