var inquirer = require ('inquirer');
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
        name: "Description"
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
        name: "Installation"
    },
    {
        type: "input",
        message: "What is this application used for?",
        name: "Usage"
    },
    {
        type: "list",
        message: "What license would you like your project to have?",
        choices: ['MIT License', 'GNU General Public License v3.0', 'Apache License 2.0', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: "License"
    },
    {
        type: "confirm",
        message: "Would you like your contributer section to be filled by the Contributor Covenant?",
        name: "Contributing"
    },
    {
        type: "confirm",
        message: "Do you need a section for writing tests?",
        name: "Tests"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "QuestionGit"
    },
    {
        type: "input",
        message: "What is your email address (example: yourEmail@url.com)?",
        name: "QuestionEmail"
    },

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
inquirer
.prompt(questions)
.then(response => {
console.log(response);
});
}

// function call to initialize program
init();
