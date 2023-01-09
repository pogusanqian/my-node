class SQLUtil {
  /**
   * 获取in的value值, 主要是用于导入数据时的预导入检查(专门针对唯一性约束)
   * select * from t_student where concat(f_name, f_age, f_sex) in getInValues()
   * @param data
   * @param fieldArr
   * @returns {string}
   */
  static getInValues(data, fieldArr) {
    const result = data.map(item => {
      const arr = [];
      fieldArr.forEach(item2 => arr.push(item[item2]));
      return arr.join('_');
    });
    return `(${JSON.stringify(result).slice(1, -1)})`;
  }

  /**
   * 驼峰转下划线
   * @private
   */
  // eslint-disable-next-line no-underscore-dangle
  static camelTo_(str) {
    return str.replace(/[A-Z]/g, match => `_${match.toLowerCase()}`);
  }

  // eslint-disable-next-line no-underscore-dangle
  static _ToCamel(str) {
    return str.replace(/_(\w)/g, (match, first) => first.toUpperCase());
  }

  /**
   * 获取insert语句的values, 传过来的数据类型只能是对象, 不能是数组
   * @param obj
   * @returns {string}
   */
  static getInsertSqlValuesByObject(obj) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(obj)) {
      if (value === true) { // 针对数据库中没有boolean数据类型
        obj[key] = 1;
      } else if (value === false) {
        obj[key] = 0;
      } else if (typeof value === 'object') { // 针对数据库中的JSON数据类型
        obj[key] = JSON.stringify(value);
      }
    }
    // 将开头和结尾的{}换成(), 另外这里还可以防止sql注入
    // return JSON.stringify(Object.values(obj)).replace(/^./, '(').replace(/.$/, ')');
    return `(${JSON.stringify(Object.values(obj)).slice(1, -1)})`;
  }

  /**
   * 获取insert语句的values, 如INSERT INTO t_student (name, age) VALUES getInsertSqlValues(data)
   * @param data  可以是object类型, 也可以是array类型
   * @returns {string|*} 如('张三', 23),('李四', 24)
   */
  static getInsertSqlValues(data) {
    if (Array.isArray(data)) { // 传递过来的是数组
      return data.map(item => this.getInsertSqlValuesByObject(item)).join(',');
    } // 传递过来的是对象
    return this.getInsertSqlValuesByObject(data);
  }

  /**
   * 获取insert语句的字段名, 如INSERT INTO t_student getInsertSqlKeys(data) VALUES getInsertSqlValues(data)
   * @param data 可能是Array类型, 也可能是Object类型
   * @returns {string}
   */
  static getInsertSqlFileNames(data) {
    const templateObj = Array.isArray(data) ? data[0] : data;
    return `(${Object.keys(templateObj).toString()})`;
  }

  /**
   * 获取 f_name=values(f_name), f_age=values(f_age)
   * @param data
   * @returns {string}
   */
  static getOnUpdateStr(data) {
    const templateObj = Array.isArray(data) ? data[0] : data;
    return Object.keys(templateObj).map(item => `${item}=values(${item})`).join();
  }
}

module.exports = SQLUtil;
