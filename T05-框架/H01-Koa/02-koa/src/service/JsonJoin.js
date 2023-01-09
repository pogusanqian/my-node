class JsonJoin {
  static updateJsonFileds() {
    const arr1 = [{
      f_id: 1,
      f_name: '张三',
    },
    {
      f_id: 1,
      f_name: '张三',
    }];
    // 获取符合条件的json字段
    const jsonArr = [{
      f_id: 1,
      f_arr: JSON.stringify(arr1),
    }, {
      f_id: 2,
      f_arr: JSON.stringify(arr1),
    }];
    // 更新对应的字段
    jsonArr.forEach(item => {
      const arr = item.f_arr ? JSON.parse(item.f_arr) : [];
      arr.forEach(item2 => {
        if (item2.f_id === 1) {
          item2.f_name = 'zhangsan';
        }
      });
      item.f_arr = JSON.stringify(arr);
    });
    console.log(jsonArr);

    // 执行更新语句
  }
}

JsonJoin.updateJsonFileds();
module.exports = JsonJoin;
