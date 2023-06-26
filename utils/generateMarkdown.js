// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `[License](#license)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.
`;
  }
  return '';
}

// A funciton that generates the Table of Contents
function generateTOC(data){
  return `## Table of Contents
  * [Description](#description)\n
  * [Installation](#installation)\n
  * [Usage](#usage)\n
  * ${renderLicenseLink(data.license)}\n
  * [Contact](#contact)\n
  * [Contributing](#contributing)\n`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${generateTOC(data.license)}
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ${renderLicenseSection(data.license)} 
  ${renderLicenseBadge(data.license)}
  ## Contact
  ${data.github}
  ## Contributing
  ${data.contributions}
`;
}

module.exports = generateMarkdown;