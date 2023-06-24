// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
        message: 'What is your GitHub username?'
    },
    {
        name: 'contributions',
        type: 'input',
        message: 'If you would like other developers to contribute then please provide guidelines for how they may do so.'
    },
];


// TODO: Create a function to write README file
// function writeToFile(content) {
    
// }

// writeToFile(content)


inquirer.prompt(questions)
        .then(({title, description, installation, usage, credits, license, github, contributions}) => {
            let content = `# ${title} \n
## Descrption
${description} \n
## Installation
${installation} \n
## Usage
${usage} \n
## Credits
${credits} \n
## License:
${license} \n
## Contact:
${github} \n
## Contributing:
${contributions}`;
      

        fs.writeFile('./README.md', content, (err) => {
            if (err) {
                console.log(err);
            }
        })
    });

// TODO: Create a function to initialize app
// function init() {
    
// }

// Function call to initialize app
// init();
