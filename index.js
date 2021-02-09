// Packages needed for the application and file creation
const fs = require('fs');
const inquirer = require('inquirer')

//The questions for the user
inquirer.prompt([
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'username'
  },
  {
    type: 'input',
    message: "What is your email address?",
    name: 'email'
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
  },
  {
    type: 'input',
    message: 'Could you provide a description of your project?',
    name: 'description'
  },
  {
    type: 'list',
    message: "What kind of license would you like your project to have?",
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'BSD 3', 'GPL 3.0', 'none']
  },
  {
    type: 'input',
    message: "What command should be run to install dependencies?",
    name: 'installDependencies'
  },
  {
    type: 'input',
    message: "What command should be run to run tests?",
    name: 'runTests',
    default: 'npm test'
  },
  {
    type: 'input',
    message: "What does the user need to know about using the repo?",
    name: 'usage'
  },
])