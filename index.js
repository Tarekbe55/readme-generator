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
    name: 'dependencies'
  },
  {
    type: 'input',
    message: "What command should be run to run tests?",
    name: 'npmTests',
    default: 'npm test'
  },
  {
    type: 'input',
    message: "What does the user need to know about using the repo?",
    name: 'usage'
  },
]).then(response => {
  const content = `
# ${response.title}
  
## Table of Contents

* [Installation](#installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [License](#License)
* [Questions](#Questions)


## Installation

To install the proper dependencies, please use the following command:
\`\`\`
${response.dependencies}
\`\`\`

## Usage

${response.usage}

## Tests

\`\`\`
${response.npmTests}
\`\`\`

### Image of code to application
![screenshot](./Images/readmeGen.png)

## License

This application is protected by the ${response.license} license. 

## Questions

For any questions relating to this application, please reach out to me at the following:
Email: ${response.email}

Github: [${response.username}](github.com/${response.username})
`
  fs.writeFile('README.md', content, (err) =>
    err ? console.error(err) : console.log('Finished!'))

}
)