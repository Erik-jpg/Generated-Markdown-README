// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js");
const path = require('path');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a short description of the project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license you would like for this project.',
        choices: ["MIT License", "Apache License 2.0", "GNU General Public License v3.0", "BSD3 3-Clause License", " "]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide the instructions to installing the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide a short description of the uses of the project.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please describe how someone might contribute or who has already contributed to the project.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide a valid email address.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide a brief description of the way to preform tests on the project.'
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
        if (err) {
            throw err;
        }
        console.log('README completed');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile('./distribution/GeneratedREADME.md', generateMarkdown(answers));
    });
}

// Function call to initialize app
init();
