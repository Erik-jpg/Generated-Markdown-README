// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return `![MIT_License](https://img.shields.io/badge/license-MIT-brightgreen)`;
  } else if (license === "Apache License 2.0") {
    return `![Apache_License](https://img.shields.io/badge/license-Apache%20License%202.0-brightgreen)`;
  } else if (license === "GNU General Public License v3.0") {
    return `![GNU](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-brightgreen)`;
  } else if (license === "BSD3 3-Clause License") {
    return `![BSD3 3-Clause License](https://img.shields.io/badge/license-BSD3%203--Clause%20License-brightgreen)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return `[MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache License 2.0") {
    return `[Apache_License](https://img.shields.io/badge/license-Apache%202.0-brightgreen)`;
  } else if (license === "GNU General Public License v3.0") {
    return `[GNU](https://www.gnu.org/licenses/)`;
  } else if (license === "BSD3 3-Clause License") {
    return `[BSD3] (https://opensource.org/licenses/BSD-3-Clause)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, github) {
  if (license === "MIT License") {
    return `MIT License
Copyright (c) 2021 ${github}
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE..`;
  } else if (license === "Apache License 2.0") {
    return ` Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/`;
  } else if (license === "GNU General Public License v3.0") {
    return `                GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007
Copyright (C) 2007 Free Software Foundation, Inc. https://fsf.org/ Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed. Preamble
The GNU General Public License is a free, copyleft license for software and other kinds of works.
The licenses for most software and other practical works are designed to take away your freedom to share and change the works. By contrast, the GNU General Public License is intended to guarantee your freedom to share and change all versions of a program--to make sure it remains free software for all its users. We, the Free Software Foundation, use the GNU General Public License for most of our software; it applies also to any other work released this way by its authors. You can apply it to your programs, too.`;
  } else if (license === "BSD3 3-Clause License") {
    return `BSD 3-Clause License
Copyright (c) 2021, Erik-jpg All rights reserved.
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`;
  } else {
    return ``;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

${renderLicenseBadge(data.license)}


## Description
${data.description} 

## License
${renderLicenseLink(data.license)} 
This project is using the ${data.license} license.
${renderLicenseSection(data.license, data.github)}

## Table of Contents
* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Questions](#questions)
* [Contributing](#contributing)
* [Tests](#tests)
* [Github](#github)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Have any questions, contact me at: ${data.email} 

## Github
Or if you would like, more of my work can be found here: 
[${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;