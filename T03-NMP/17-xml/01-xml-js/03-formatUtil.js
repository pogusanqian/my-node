const unNormalJson = {
  root: {
    name: {
      _text: "张三",
    },
    age: {
      _text: "23",
    },
    schoolList: {
      schoolInfo: [
        {
          name: {
            _text: "河南理工",
          },
          address: {
            _text: "焦作市",
          },
        },
        {
          name: {
            _text: "清华大学",
          },
          address: {
            _text: "北京市",
          },
        },
      ],
    },
    address: {
      _cdata: "濮阳市",
    },
    phone: {
    },
    police: {
      _attributes: {
        disable: "1",
        type: "23.0",
      },
      email: {
        name: {
          _text: "河南理工",
        },
        address: {
          _text: "焦作市",
        },
      }
    },

  },
};

// 获取正常的JSON对象
function getNormalJSON(unNormalJson) {
  let normalJSON = {};
  Object.keys(unNormalJson).forEach(key => {
    const value = unNormalJson[key];
    if (Array.isArray(value)) {
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

// 获取XML类型的json对象
function getUNNormalJSON(normalJson) {

}
module.exports = {
  getNormalJSON,
  getUNNormalJSON
};

const res = getNormalJSON(unNormalJson);
console.log(res);