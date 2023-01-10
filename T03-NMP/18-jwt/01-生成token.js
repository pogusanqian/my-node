const jwt = require('jsonwebtoken');

// 默认使用SHA256签名, 第一个参数是载荷, 第二个参数是盐
const token1 = jwt.sign({
  userid: 1001,
  // 过期时间: 距离1970的描述
  exp: Math.floor(Date.now() / 1000) + (60 * 60)
}, 'mysalt');

// 另一种方式指定token有效期
const token2 = jwt.sign({userid: 1001}, 'mysalt', {expiresIn: 60 * 60});


// 设置签名方式
const token3 = jwt.sign({userid: 1001}, 'mysalt', {algorithm: 'HS512'});


console.log(token3);