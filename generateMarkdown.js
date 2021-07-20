// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return `![MIT_License](https://img.shields.io/badge/license-MIT-brightgreen)`
  }
  else if (license === "Apache License 2.0") {
    return `![Apache_License](https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen)`
  }
  else if (license === "GNU General Public License v3.0") {
  return `![GNU](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-brightgreen)`
  }
  else if (license === "BSD3 3-Clause License") {
    return `![BSD3 3-Clause License](https://img.shields.io/badge/license-BSD3%203--Clause%20License-brightgreen)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return `[MIT](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Apache License 2.0") {
    return `![Apache_License](https://img.shields.io/badge/license-Apache%202.0-brightgreen)`
  }
  else if (license === "GNU General Public License v3.0") {
    return `![GNU](https://www.gnu.org/licenses/)`
  }
  else if (license === "BSD3 3-Clause License") {
    return `[BSD3] (https://opensource.org/licenses/BSD-3-Clause)`
  }
  else {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return `![MIT](https://github.com/Erik-jpg/Homework04/community/license/new?branch=main&template=mit)`
  }
  else if (license === "Apache License 2.0") {
    return `![Apache_License](https://github.com/Erik-jpg/Homework04/community/license/new?branch=main&template=apache-2.0)`
  }
  else if (license === "GNU General Public License v3.0") {
    return `![GNU](https://github.com/Erik-jpg/Homework04/community/license/new?branch=main&template=gpl-2.0)`
  }
  else if (license === "BSD3 3-Clause License") {
    return `![BSD3](https://github.com/Erik-jpg/Homework04/community/license/new?branch=main&template=bsd-3-clause)`
  }
  else {
    return ``
  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)} ${renderLicenseSection(data.license)} 

## Description
${data.description} 

## Project Title
${data.projectTitle}

## License
${data.license}
`;
}

module.exports = generateMarkdown;
