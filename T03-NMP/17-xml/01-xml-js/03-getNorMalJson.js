function getNormalJSON(unNormalJson) {
  let normalJSON = {};
  Object.keys(unNormalJson).forEach(key => {
    const value = unNormalJson[key];
    if (Array.isArray(value)) {
      normalJSON[key] = value.reduce((prev, item) => {
        prev.push(getNormalJSON(item));
        return prev;
      }, []);
    } else if (typeof value === 'object' && key !== '_attributes') {
      if (Object.keys(value).length) { // 判断是否是空对象
        normalJSON[key] = getNormalJSON(value);
      } else {
        normalJSON[key] = '';
      }
    } else {
      // x_text, _cdata, _attributes三个元素互斥
      if (['_text', '_attributes', '_cdata'].includes(key)) {
        normalJSON = value;
      }
    }
  });
  return normalJSON;
}

// 获取正常的JSON对象
function getNormalJSON2(unNormalJson) {
  let normalJSON = {};
  Object.keys(unNormalJson).forEach(key => {
    const value = unNormalJson[key];
    if (Array.isArray(value)) {
      // 这里会将数组的info层忽略掉
      normalJSON = [];
      value.forEach(item => {
        normalJSON.push(getNormalJSON(item));
      });
    } else if (typeof value === 'object' && key !== '_attributes') {
      if (Object.keys(value).length) { // 判断是否是空对象
        normalJSON[key] = getNormalJSON(value);
      } else {
        normalJSON[key] = '';
      }
    } else {
      // xml中如果有了_text, 那么就不能再有_cdata和_attributes
      if (['_text', '_attributes', '_cdata'].includes(key)) {
        normalJSON = value;
      }
    }
  });
  return normalJSON;
}


module.exports = {
  getNormalJSON
}
