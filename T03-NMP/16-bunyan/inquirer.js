const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "请输入姓名:",
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers.name}!`);
});