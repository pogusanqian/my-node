const { sm3 } = require('miniprogram-sm-crypto');

// 要求为 16 进制串或字节数组
const key = 'daac25c1512fe50f79b0e4526b93f5';
const hashData1 = sm3('Abcd123$');
const hashData2 = sm3('abc', { key });

console.log(hashData1);
console.log(hashData2);
