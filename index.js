// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Describe any necessary installations:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of the application:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter a contribution your project makes:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the tests that can be ran:',
      },
      {
        type: 'input',
        name: 'license',
        message: 'Enter a license if one applies,'
      },

];

// TODO: Create a function to write README file
function writeToFile(answers) {
    return `
  # ${answers.title}

  ## Description
  ${answers.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  This application is covered under the ${answers.license} license.

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  For additional questions, you can reach me via GitHub: [${answers.username}](https://github.com/${answers.username})
  or email: ${answers.email}.
  `;
}

// TODO: Create a function to initialize app
inquirer.prompt(questions).then((answers) => {
    // Generate README content based on the answers
    const readmeContent = writeToFile(answers);
  
    // Write the generated README content to a file
    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md file generated successfully!');
      }
    });
  });


