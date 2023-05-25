// 这个包不能进行非对称加密, 非对称加密一般使用jsencrypt
const CryptoJS = require('crypto-js');

const text = 'admin';
const key = 'key';

const ciphertext = CryptoJS.AES.encrypt(text, key).toString();
const bytes = CryptoJS.AES.decrypt(ciphertext, key);
const originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log('密文:', ciphertext);
console.log('明文:', originalText);
