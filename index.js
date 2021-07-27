// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = ('./generateMarkdown.js');
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
        name: 'tableOfContents',
        message: 'Please provide a table of contents of the project.'
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
        
    }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
