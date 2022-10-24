// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');

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
        choices: ['GNU', 'MIT', 'Apache 2.0', 'ISC','None'],
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
    
    const fileText = generateMarkdown(dataArr);
    console.log(fileText);

    fs.writeFile(fileName, fileText, (err) => err ? console.log(err) : console.log('Success!'));
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
