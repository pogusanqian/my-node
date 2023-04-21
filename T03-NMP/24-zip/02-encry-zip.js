const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream(__dirname + '/demo2.zip');
// 配置中间件
archiver.registerFormat('zip-encrypted', require('archiver-zip-encrypted'));
const archive = archiver.create('zip-encrypted', {
  zlib: { level: 8 },
  encryptionMethod: 'aes256',
  password: '123123'
});
archive.pipe(output);
archive.file('file1.txt', { name: 'file4.txt' });
archive.finalize();
