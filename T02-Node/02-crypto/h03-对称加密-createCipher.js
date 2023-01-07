const crypto = require('crypto');

// 创建加密函数, 第一个参数表示加密算法, 第二个参数表示密钥
const cipher = crypto.createCipher('aes-256-cbc', 'secret');
// 获取加密数据(可多次加密), 注意这里需要进行累加接收的, 否则会导致密文丢失
let cipherText = cipher.update('Hello', 'utf-8', 'hex');
cipherText += cipher.update('World', 'utf8', 'hex');
cipherText += cipher.update('你好', 'utf8', 'hex');
cipherText += cipher.update('世界', 'utf8', 'hex');
// 获取完整密文
cipherText += cipher.final('hex');
console.log('密文:', cipherText);


// 创建加密函数, 第一个参数表示加密算法, 第二个参数表示密钥
const decipher = crypto.createDecipher('aes-256-cbc', 'secret');
// 解密数据
let decipherText = decipher.update(cipherText, 'hex', 'utf8');
decipherText += decipher.final('utf8');
console.log('明文:', decipherText);