const log4js = require('log4js');

// TODO 日志文件的格式还需要进行相关的修改, 需要打印出对应的文件名称与方法名称
log4js.configure({
  appenders: {
    consoleOut: {
      type: 'console',
      layout: { type: 'colored' },
    },
    dataFileOut: {
      type: 'dateFile',
      filename: process.env.LOGGER_FILE_PATH,
      layout: { type: 'colored' },
    },
  },
  categories: {
    default: {
      appenders: ['consoleOut'],
      level: 'info',
    },
    dataFileOut: {
      appenders: ['dataFileOut'],
      level: 'info',
    },
  },
});

module.exports = log4js.getLogger('consoleOut');
