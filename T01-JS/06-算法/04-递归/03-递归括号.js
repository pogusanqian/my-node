// 判断字符串是否有正确括号组成
function checkBracket(data) {
  const temp = [];
  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    if (item === '(') temp.push('(');
    if (item === ')') {
      if (temp.length === 0) return false;
      else temp.pop();
    }
  }
  return temp.length === 0;
}

console.log(checkBracket('()()((()))'));
