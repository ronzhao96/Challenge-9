// TODO: Include packages needed for this application
const fs = require('fs');
//const generateMarkdown = require('generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your repository title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your repository description?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions?',
    },
    {
        type: 'list',
        message: 'What license do you want to use?',
        name: 'license',
        choices: ['GNU', 'MIT', 'Apache 2.0', 'ISC'],
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const dataArr = [];
    
    for (key in data) {
        console.log(JSON.stringify(data[key]).replace(/\"/g, "")); 
        dataArr.push(data[key]);
    }
    
    const title = JSON.stringify(dataArr[0]);
    const description = JSON.stringify(dataArr[1]);
    const installation = JSON.stringify(dataArr[2]);
    const usage = JSON.stringify(dataArr[3]);
    const guidelines = JSON.stringify(dataArr[4]);
    const test = JSON.stringify(dataArr[5]);
    const username = JSON.stringify(dataArr[7]);
    const email = JSON.stringify(dataArr[8]);

    fs.writeFile(fileName, `# ${dataArr[0]}\n## Table of Contents\n* [Description](#description)\n* [Installation Instructions](#installation-instructions)\n* [Usage Information](#usage-information)\n* [Contribution Guidelines](#contribution-guidelines)\n* [Test Instructions](#test-instructions)\n* [License](#license)\n* [Contact](#contact)\n## Description\n${dataArr[1]}\n## Installation Instructions\n${dataArr[2]}\n## Usage Information\n${dataArr[3]}\n## Contribution Guidelines\n${dataArr[4]}\n## Test Instructions\n${dataArr[5]}\n## License\n## Contact\n* GitHub Link: https://github.com/${dataArr[7]}\n* Email: ${dataArr[8]}`,(err) => err ? console.log(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {

    inquirer
        .prompt([questions[0],questions[1],questions[2],questions[3],questions[4],questions[5],questions[6],questions[7],questions[8]])
        .then((data) => {
        const filename = `New_README.md`;
        console.log(data);
        writeToFile(filename,data);
        });

}

// Function call to initialize app
init();
