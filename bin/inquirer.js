const inquirer = require('inquirer');

const questions = [
  {
    name: 'title',
    type: 'input',
    message: `What's the title of your project?`
  },
  {
    name: 'description',
    type: 'input',
    message: `What's the description of your project?`
  },
  {
    name: 'author',
    type: 'input',
    message: `What's the author's name?`
  },
  {
    name: 'style',
    type: 'list',
    message: `What style do you want your home page to be?(Select afternoon-grocery, if you want to download reco_luan's '午后南杂')`,
    choices: ['blog', 'doc', 'afternoon-grocery'],
    filter: function(val) {
      return val.toLowerCase();
    }
  }
]

const handleInquirer = function () {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt(questions)
      .then(answers => {
        resolve(answers)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = handleInquirer
