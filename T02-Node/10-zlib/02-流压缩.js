const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');

// 流压缩大文件
fs.createReadStream('D:/Code/study/my-node/package-lock.json')
  .pipe(zlib.createGzip())
  // 加密之后的压缩包, 直接使用360打不开
  .pipe(crypto.createCipher('aes256', 'Abcd1234'))
  .pipe(fs.createWriteStream('./nocommit/my.gz'))
  .on('finish', () => {
    console.log('压缩成功');
    // 解压缩
    fs.createReadStream('./nocommit/my.gz')
      .pipe(crypto.createDecipher('aes256', 'Abcd1234'))
      .pipe(zlib.createGunzip())
      .pipe(fs.createWriteStream('./nocommit/my'))
      .on('finish', () => console.log('解压成功'));
  });
