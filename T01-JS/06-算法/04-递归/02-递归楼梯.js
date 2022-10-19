/**
 * N个台阶, 每次只能上一节或者两节, 求有多少中情况
 * @param {*} num 
 * @returns 
 */
function getAnswers(num) {
  const answers = [];
  function getAnswer(newNum, answer = []) {
    if (newNum < 0) return;
    if (answer.reduce((prev, item) => prev + item, 0) === num) {
      answers.push(answer);
      return;
    };
    // 分情况递归调用; 1,2表示上台阶的步数
    [1, 2].forEach(item => getAnswer(newNum - item, Object.assign(answer).concat(item)));
  }
  getAnswer(num);
  return answers;
}

console.log(getAnswers(40));