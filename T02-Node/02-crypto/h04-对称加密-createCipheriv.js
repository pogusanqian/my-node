const crypto = require('crypto');

// 密钥, 密钥必须是8/16/32位，如果加密算法是128，则对应的密钥是16位，如果加密算法是256，则对应的密钥是32位
const key = '123456789abcdefg'
// 偏移向量, 类似盐
const iv = 'abcdefg123456789';

// 加密数据
const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
let cipherText = cipher.update('你好世界HelloWorld', 'utf8', 'hex');
cipherText += cipher.final('hex');
console.log('密文: ', cipherText);

// 解密数据
const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
let decipherText = decipher.update(cipherText, 'hex', 'utf8');
decipherText += decipher.final('utf8');
console.log('明文: ', decipherText);
