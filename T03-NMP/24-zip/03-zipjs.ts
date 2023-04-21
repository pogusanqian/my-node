import FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { BlobWriter, ZipWriter } from '@zip.js/zip.js';

class FSUtil {
  /**
   * 获取工作簿对象
   * @param data
   * @param title
   */
  getWB(data: Record<string, any>[], title: Record<string, string>) {
    // 根据title过滤掉data中的属性
    const keys = Object.keys(title);
    data = data.map((item) => {
      return keys.reduce((prev, key) => {
        prev[key] = item[key];
        return prev;
      }, {});
    });
    // 创建工作部对象
    const wb = XLSX.utils.book_new();
    // 将title添加到第一行
    data.splice(0, 0, title);
    // 将文件写入到工作表中
    const ws = XLSX.utils.json_to_sheet(data, { skipHeader: true });
    // 将工作表合并到工作簿中, 并指定工作表名称
    XLSX.utils.book_append_sheet(wb, ws);
    return wb;
  }

  /**
   * 导出excle文件
   * @param data
   * @param title
   * @param fileName
   */
  downExcle(data: Record<string, any>[], title: Record<string, string>, fileName?: string) {
    // 获取工作簿对象
    const wb = this.getWB(data, title);
    // 导出文件, 并指定文件名称
    XLSX.writeFile(wb, fileName || `$Date.now()}.xlsx`);
  }

  /**
   * ZIP导出, 可加密
   * @param data
   * @param password
   */
  async downZip(stream: ReadableStream<Uint8Array>, zipName: string, fileName: string, password?: string) {
    const zipFileWriter = new BlobWriter();
    const zipWriter = new ZipWriter(zipFileWriter);
    await zipWriter.add(fileName, stream, {
      zipCrypto: Boolean(password),
      password: password
    });
    await zipWriter.close();
    const zipFileBlob = await zipFileWriter.getData();
    FileSaver.saveAs(zipFileBlob, zipName);
  }

  /**
   * 将data数据转换成excle, 并导出成zip压缩包, 可加密
   * @param data
   * @param title
   * @param zipNmae
   * @param fileName
   * @param password
   */
  async downZipByData(
    data: Record<string, any>[],
    title: Record<string, string>,
    zipNmae: string,
    fileName: string,
    password?: string
  ) {
    const wb = this.getWB(data, title);
    const wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'array' });
    const stream = new Blob([wbout]).stream();
    await this.downZip(stream, zipNmae, fileName, password);
  }
}

export default new FSUtil();
