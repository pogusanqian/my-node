const crypto = require('crypto');

// 生成公钥私钥
function genRSAKeyPaire() {
  return crypto.generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
  });
}

// 使用公钥加密
function publicKeyEncrypt(data, publicKey) {
  // 第一个参数也可以写成对象的形式{key: publickey, padding: crypto.constants.RSA_PKCS1_PADDING}
  return crypto.publicEncrypt(publicKey, data).toString('base64');
}

// 使用私钥解密
function privateKeyDecrypt(encryptedData, privateKey) {
  return crypto.privateDecrypt(privateKey, Buffer.from(encryptedData, 'base64')).toString();
}

const text = 'HelloWorld你好世界';
const { publicKey, privateKey } = genRSAKeyPaire();
console.log('密文: ', publicKeyEncrypt(text, publicKey));
console.log('明文: ', privateKeyDecrypt(publicKeyEncrypt(text, publicKey), privateKey));
