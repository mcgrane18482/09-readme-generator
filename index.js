// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown =  require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'What is the name of your project?'
    },
    {
        name: 'description',
        type: 'input',
        message: 'Write a short description of your project.'
    },
    {

        name: 'installation',
        type: 'input',
        message: 'What are the steps required to install your project?'

    },
    {
        name: 'usage',
        type: 'input',
        message: 'Provide instructions and examples for use of your app.'

    },
    {
        name: 'credits',
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles.'

    },
    {
        name: 'license',
        type: 'list',
        choices: ['MIT', 'GPL', 'Apache', 'GNU', 'None'],
        message: 'Which license did you use?'
    },
    {
        name: 'github',
        type: 'input',
        message: 'What is your GitHub username so that other developers may find your work?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email so that other developers may contact you?'
    },
    {
        name: 'contributions',
        type: 'input',
        message: 'If you would like other developers to contribute then please provide guidelines for how they may do so.'
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err, result)=> {
        if (err) throw err;
        console.log('README file created')
    })
}

// TODO: Create a function to initialize app
function init() {
    // this function needs to run the prompt
    inquirer.prompt(questions).then((answers)=> {
        console.log(answers);
        // once we have the answer object then we call the function to write the README file which takes the return from generateMarkdown 
        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();