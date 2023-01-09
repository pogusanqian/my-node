class ArrayUtil {
  /**
   * 将以为数组截取成二维数组, 如将[1,2,3,4,5,6,,7,8]截取成[[1,2,3],[4,5,6],[7,8]]
   * @param arr 源数组
   * @param size 内层数组的长度
   */
  static oneToTwoDimen(arr, size) {
    const copyArr = [...arr];
    const twoDimenArr = [];
    while (copyArr.length > size) {
      twoDimenArr.push(copyArr.splice(0, size));
    }
    twoDimenArr.push(copyArr);
    return twoDimenArr;
  }

  /**
   * 修改数组中的json字段, 主要用于子表是json字段的情况
   * @param arr,
   * @param jsonFiled 表示的是f_arr
   * @param UNK 表示的是arr[*].f_arr.f_id
   * @param UNKValue 表示的是arr[*].f_arr.f_id的值
   * @param updateFilde 表示的是arr[*].f_arr.f_name
   * @param updateFildeValue  表示的是arr[*].f_arr.f_name需要更新的值
   * arr的示例, arr的f_id字段表示的数据表的主键, f_arr表示的是json字符串
   * [
   * {
   *  f_id: 1,
   *  f_arr: '[{"f_id":1,"f_name":"张三"},{"f_id":1,"f_name":"张三"}]'
   * },
   * {
   * f_id: 2,
   *  f_arr: '[{"f_id":1,"f_name":"张三"},{"f_id":1,"f_name":"张三"}]'
   * }
   * ]
   */
  static updateJsonFileds(arr, jsonFiled, UNK, UNKValue, updateFiled, updateValue) {
    arr.forEach(item => {
      const jsonArr = item[jsonFiled] ? JSON.parse(item[jsonFiled]) : [];
      jsonArr.forEach((item2) => {
        if (item2[UNK] === UNKValue) item2[updateFiled] = updateValue;
      });
      item[jsonFiled] = JSON.stringify(jsonArr);
    });
  }

  /**
   * 删除数组中的json字段, 主要用于子表是json字段的情况
   * @param arr,
   * @param UNK 表示的是arr[*].f_arr.f_id
   * @param UNKValue 表示的是arr[*].f_arr.f_id的值
   * @param type 分为两种情况, 一种是update, 一种是delete
   *
   */
  static deleteJsonFileds(arr, jsonFiled, UNK, UNKValue) {
    arr.forEach(item => {
      let jsonArr = item[jsonFiled] ? JSON.parse(item[jsonFiled]) : [];
      jsonArr = jsonArr.filter(item2 => (item2[UNK] !== UNKValue));
      item[jsonArr] = JSON.stringify(jsonArr);
    });
  }
}

module.exports = ArrayUtil;
