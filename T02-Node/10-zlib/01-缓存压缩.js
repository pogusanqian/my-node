const fs = require('fs');
const zlib = require('zlib');

// 通过缓存实现小文件压缩
const buff = fs.readFileSync('D:/Code/study/my-node/package-lock.json');
const zipBuff = zlib.gzipSync(buff, {});
fs.writeFileSync('./nocommit/my.gz', zipBuff);
