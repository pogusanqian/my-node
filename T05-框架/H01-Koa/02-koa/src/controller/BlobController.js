const fs = require('fs');
const path = require('path');
const Images = require('images');
const JSZip = require('jszip');
const TextToSVG = require('text-to-svg');
const SvgToPng = require('svg2png');
const ArrayUtil = require('../util/ArrayUtil');
const JSZipUtil = require('../util/JSZipUtil');

/**
 * 这种静态资源依然会打印日志
 */
class BlobController {
  static async getImg(ctx) {
    //  获取图片资源, 只是展示, 并没有尽心下载
    const img = fs.readFileSync('./src/static/imgs/最终结果.png');
    ctx.type = 'image/png';
    ctx.body = img;
  }

  static async getZip(ctx) {
    const zip = fs.readFileSync('./src/static/zips/out.zip');
    ctx.set('Content-Type', 'application/zip');
    ctx.body = zip;
  }

  static async getQRCodeZip(ctx) {
    /**
     * 获取svg和qrcode对应的bufferArr
     * @param qrArr
     * @returns {Promise<(unknown[]|*)[]>}
     */
    async function getBufferArr(qrArr) {
      // 文字转svg使用的三个参数
      const textToSVG = TextToSVG.loadSync();
      const flag = 'xmlns="http://www.w3.org/2000/svg"';
      const svgParams = {
        x: 0,
        y: 0,
        fontSize: 24,
        anchor: 'top',
      };

      const arr1 = await Promise.all(qrArr.map(async (item) => {
        const svg = textToSVG.getSVG(item.qrNmae, svgParams).replace(flag, `style="fill:rgba(0,0,0,0.3);" ${flag}`);
        const svgBuffer = await SvgToPng(svg);
        return svgBuffer;
      }));

      const arr2 = qrArr.map((item) => Images(item.qrCode).size(480, 480));
      return [arr1, arr2];
    }

    console.time('oneTime');
    const zip = new JSZip();
    const width = 702;
    const heigth = 1032;
    const partentImg = Images('src/static/imgs/社群背景图.png').size(width, heigth);

    console.time('twoTime');
    const qrArr = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 1; i++) {
      qrArr.push({
        qrCode: Images('src/static/imgs/美女1.jpg'),
        qrNmae: `美女_${i}`,
      });
    }
    console.timeEnd('twoTime');

    // svgBufferArr和qrCodeArr是一一对应的
    let svgBufferArr = [];
    let qrCodeArr = [];
    const qrTwoDimenArr = ArrayUtil.oneToTwoDimen(qrArr, 100);
    // getBufferArr()已经使用promise.all开启了多线程, 这个for循环中就不再开启多线程
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < qrTwoDimenArr.length; i++) {
      // eslint-disable-next-line no-await-in-loop
      const [arr1, arr2] = await getBufferArr(qrTwoDimenArr[i]);
      svgBufferArr = svgBufferArr.concat(arr1);
      qrCodeArr = qrCodeArr.concat(arr2);
    }

    // 合成图片
    svgBufferArr.forEach((svgBuffer, index) => {
      const backgroundImg = Images(partentImg);
      const qrCodeImg = qrCodeArr[index];
      backgroundImg.draw(qrCodeImg, 111, 351).drawImage(Images(svgBuffer), 280, 843);
      zip.file(`${index}_美女.png`, backgroundImg.encode('png'));
    });
    ctx.set('Content-Type', 'application/zip');
    ctx.body = await zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true });
    console.timeEnd('oneTime');
  }

  /**
   * 上传文本文件, 并处理后下载
   * @param ctx
   * @returns {Promise<void>}
   */
  static async uploadTxtFile(ctx) {
    // koa-body组件, 会自动将文本文件解析到req.body属性中; 如果是json文本, 还会进行parse解析, 文本不规范, 还会报错
    // 注意这个组件只能解析单文本上传, 如果是multipart/form-data类型的就不在支持解析了
    // 如果想解析multipart/form-data类型, 需要使用koa-multer
    const data = ctx.request.body;
    ctx.set('Content-disposition', `attachment; filename=${Date.now()}.txt`);
    ctx.body = JSON.stringify(data);
  }

  /**
   * 这个multer设置是保存到了内存中
   * @param ctx
   * @returns {Promise<void>}
   */
  static async uploadOneImg(ctx) {
    console.log(ctx.files);
    ctx.type = 'image/png';
    ctx.body = ctx.files[0].buffer;
  }

  static async uploadFileds(ctx) {
    console.log(ctx.files);
    ctx.body = '请求成功';
  }

  /**
   * 创建目录, 主要区分一下路径的区别
   * @param ctx
   * @returns {Promise<void>}
   */
  static async mkDir(ctx) {
    fs.mkdirSync('/haha1'); // 根路径是磁盘的根路径, 直接在D盘下创建了目录
    fs.mkdirSync('./haha2'); // 相对路径就是我们的项目启动路径(是在my-koa目录下使用了node src/app.js),
    fs.mkdirSync(path.join(__dirname, '../static', 'haha3')); // 根据dirname拼接绝对路径
    ctx.body = '请求成功';
  }

  /**
   * 上传zip文件, 并直接在程序中解压
   * @param ctx
   * @returns {Promise<void>}
   */
  static async uploadZipImgs(ctx) {
    const zip = new JSZip();
    // 解压文件到指定目录(现在上传的文件是保存在缓存中的)
    const data = await zip.loadAsync(ctx.files[0].buffer);
    await JSZipUtil.unzip(data, path.join(__dirname, '../static'));
    ctx.body = '请求成功';
  }

  /**
   * 获取压缩包中的imgs图片
   * @param ctx
   * @returns {Promise<void>}
   */
  static async getZipImgs(ctx) {
    const zip = new JSZip();
    const data = await zip.loadAsync(ctx.files[0].buffer);
    const zipFiles = data.files;
    const key = Object.keys(zipFiles).find(item => !zipFiles[item].dir); // 过滤出任意一张图片
    const buffer = await zipFiles[key].async('nodebuffer');
    ctx.type = 'image/png';
    ctx.body = buffer;
  }
}

module.exports = BlobController;
