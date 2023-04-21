const fs = require('fs');
// archiver只能在后端使用, 无法在前端使用
const archiver = require('archiver');

// 创建压缩流对象
const output = fs.createWriteStream(__dirname + '/demo1.zip');
const archive = archiver.create('zip', {
  zlib: { level: 8 },
});

archive.pipe(output);
// 添加压缩的文件, 第一个参数是文件内容, 第二个参数是文件参数
archive.append(fs.createReadStream(__dirname + '/file1.txt'), { name: 'file1.txt' });
archive.append('string cheese!', { name: 'file2.txt' });
archive.append(Buffer.from('buff it!'), { name: 'file3.txt' });
archive.file('file1.txt', { name: 'file4.txt' });
archive.finalize();
