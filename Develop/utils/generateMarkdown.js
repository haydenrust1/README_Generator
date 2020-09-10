// function to generate markdown for README
function generateMarkdown(data) {
  return 
  `
  # ${data.title}
  ## ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  ## ${data.installation}
  ## ${data.usage}
  ## ${data.license}
  ## ${data.contributing}
  ## ${data.tests}
  ## Questions
  Please contact me with any questions you may have using the links below!
  * ${data.questionGit}
  * ${data.questionEmail}
  `
}

module.exports = generateMarkdown;
