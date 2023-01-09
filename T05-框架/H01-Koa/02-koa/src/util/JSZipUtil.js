const path = require('path');
const fs = require('fs');

class JSZipUtil {
  static async unzip(data, savePath) {
    // eslint-disable-next-line guard-for-in
    for (const item of Object.keys(data.files)) {
      const zipObj = data.files[item];
      const dest = path.join(savePath, item);
      if (zipObj.dir) { // 如果是目录就创建目录
        fs.mkdirSync(dest);
      } else {
        // 这里可以使用promise.all进行优化,但是太麻烦了, 因为他这里还有一个创建目录的情况
        // eslint-disable-next-line no-await-in-loop,
        const content = await zipObj.async('nodebuffer');
        fs.writeFileSync(dest, content);
      }
    }
  }
}

module.exports = JSZipUtil;
