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
        choices: ['MIT', 'GNU', 'Apache2.0', 'Mozilla-Public-License 2.0', 'Unlicensed'],
        name: "license"
    },
    {
        type: "input",
        message: "Add guidlines on how you would like others to contribute to your project",
        name: "contributing"
    },
    {
        type: "input",
        message: "How can a user test your project?",
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
    }

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
  
// function to initialize program
function init() {
inquirer
.prompt(questions)
.then(answers => {
    console.log(answers);
    writeToFile('README.md', markdown(answers));
});
}


// function call to initialize program
init();
