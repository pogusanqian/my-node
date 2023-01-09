const multer = require('@koa/multer');
const testRouter = require('koa-router')();
const BlobController = require('../../controller/BlobController');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, '/sources'); // 注意这里指定的路径是磁盘的根路径, 而不是项目的根路径; 这个路径需要我们提前创建
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`); // originalname表示的是上传文件的名称, 一般都要进行重命名的
  },
});
const limits = {
  fields: 3, // 非文件字段的最大数量
  files: 2, // 文件最大数量
  fileSize: 100 * 1024 * 1024, // 文件最大尺寸
};

const upload1 = multer({ // 把上传的文件信息保存到了内存中, 当请求结束后, 内存中的数据也会被删删除
  limits,
  storage: multer.memoryStorage(),
});
const upload2 = multer({ storage, limits });

testRouter.get('/getImg', ctx => BlobController.getImg(ctx));
testRouter.get('/getZip', ctx => BlobController.getZip(ctx));
testRouter.get('/getQRCodeZip', ctx => BlobController.getQRCodeZip(ctx));
testRouter.all('/uploadTxtFile', ctx => BlobController.uploadTxtFile(ctx));
testRouter.all('/uploadOneImg', upload1.any(), ctx => BlobController.uploadOneImg(ctx));
testRouter.all('/uploadFileds', upload2.any(), ctx => BlobController.uploadFileds(ctx));
testRouter.all('/uploadZipImgs', upload1.any(), ctx => BlobController.uploadZipImgs(ctx));
testRouter.all('/mkDir', upload1.any(), ctx => BlobController.mkDir(ctx));
testRouter.all('/getZipImgs', upload1.any(), ctx => BlobController.getZipImgs(ctx));

module.exports = testRouter;
