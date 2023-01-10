const jwt = require('jsonwebtoken');

// 另一种方式指定token有效期
const token1 = jwt.sign({ userid: 1001 }, 'mysalt', { expiresIn: 1 });
const token2 = token1.concat('ss');

// 验证成功, 返回token的负载部分; 验证失败就会报错, 签名不一样, token过期都会导致验证失败
console.log(jwt.verify(token1, 'mysalt'));
console.log(jwt.verify(token2, 'mysalt'));
