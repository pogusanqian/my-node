const xlxs = require('xlsx');

const workbook = xlxs.readFile('D:\\Code\\study\\my-node\\T03-NMP\\02-xlsx\\node\\a.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
let excleData = xlxs.utils.sheet_to_json(worksheet, {
  header: ['label', 'value', 'devNumber', 'key', 'comment', 'isTerminalUpdate', 'isServerUpdate'],
});
excleData.splice(0, 1);

const preSql = `INSERT INTO data_map(table_name, field_name, value, label, value_type, comment) VALUES `;
// dev_type数据字典
let devTypeSql = excleData
  .map((item) => `('element_policy', 'dev_type', '${item.devNumber}', '${item.label}', '2', '设备类型:${item.label}')`)
  .join();
devTypeSql = preSql + devTypeSql + ';';

// dev_type_key数据字典
let devTypeKeySql = excleData
  .map(
    (item) => `('element_policy', 'dev_type_key', '${item.devNumber}', '${item.key}', '2', '设备类型:${item.label}')`
  )
  .join();
devTypeKeySql = preSql + devTypeKeySql + ';';

// 策略默认值
const policy = {
  readonlylist: excleData.filter(item => item.value === '只读').map(item => item.key),
  readwritelist: excleData.filter(item => item.value === '读写').map(item => item.key),
  forbidlist: excleData.filter(item => item.value === '禁用').map(item => item.key),
  freelist: excleData.filter(item => item.value === '启用').map(item => item.key),
};

console.log(JSON.stringify(policy))