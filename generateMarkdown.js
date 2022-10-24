// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs');

function renderLicenseBadge(license) {
  if (license == 'None') {
    const badge = "";
    return badge;
  }
  if (license == 'GNU') {
    return badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
  if (license == 'MIT') {
    return badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  }
  if (license == 'Apache 2.0') {
    return badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  }
  if (license == 'ISC') {
    return badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'None') {
    const link = "";
    return link;
  }
  if (license == 'GNU') {
    return link = 'https://www.gnu.org/licenses/gpl-3.0';
  }
  if (license == 'MIT') {
    return link = 'https://opensource.org/licenses/MIT';
  }
  if (license == 'Apache 2.0') {
    return link = 'https://opensource.org/licenses/Apache-2.0';
  }
  if (license == 'ISC') {
    return link = 'https://opensource.org/licenses/ISC';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'None') {
    const text = "";
    return text;
  }
  if (license == 'GNU') {
    let text = fs.readFileSync('GNU.txt', 'utf8');

    return text;
  }
  if (license == 'MIT') {
    let text = fs.readFileSync('MIT.txt', 'utf8');

    return text;
  }
  if (license == 'Apache 2.0') {
    let text = fs.readFileSync('Apache.txt', 'utf8')
    
    return text;
  }
  if (license == 'ISC') {
    let text = fs.readFileSync('ISC.txt', 'utf8');
    
    return text;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const text = renderLicenseSection(data[6]);
  const badge = renderLicenseBadge(data[6]);
  const link = renderLicenseLink(data[6]);

  let fileText;
  return fileText = `# ${data[0]}\n## Table of Contents\n* [Description](#description)\n* [Installation Instructions](#installation-instructions)\n* [Usage Information](#usage-information)\n* [Contribution Guidelines](#contribution-guidelines)\n* [Test Instructions](#test-instructions)\n* [License](#license)\n* [Contact](#contact)\n## Description\n${data[1]}\n## Installation Instructions\n${data[2]}\n## Usage Information\n${data[3]}\n## Contribution Guidelines\n${data[4]}\n## Test Instructions\n${data[5]}\n## License\n* ${badge}\n* ${link}\n\n${text}\n## Contact\n* GitHub Link: https://github.com/${data[7]}\n* Email: ${data[8]}`;
}

module.exports = generateMarkdown;
