const inquirer = require ('inquirer');
const fs = require ('fs');
const markdown = require ('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your README?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your application?",
        name: "description"
    },

    /***************************************
     * Should I do this?
     ***********************
    {
        type: "checkbox",
        message: "What do you need in your Table of Contents?",
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        name: "Table of Contents"
    },
    *****************************************/
    {
        type: "input",
        message: "What steps are required for installing your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is this application used for?",
        name: "usage"
    },
    {
        type: "list",
        message: "What license would you like your project to have?",
        choices: ['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: "license"
    },
    {
        type: "confirm",
        message: "Would you like your contributer section to be filled by the Contributor Covenant?",
        name: "contributing"
    },
    {
        type: "confirm",
        message: "Do you need a section for writing tests?",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "questionGit"
    },
    {
        type: "input",
        message: "What is your email address (example: yourEmail@url.com)?",
        name: "questionEmail"
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {

        if (err) {
            return console.log(err);
        }

        console.log('success!')
    });
}

// let responses;
// function to initialize program
function init() {
inquirer
.prompt(questions)
.then(function (response) {
    console.log(response);
    writeToFile('README.md', markdown(response));
});
}

// function call to initialize program
init();
