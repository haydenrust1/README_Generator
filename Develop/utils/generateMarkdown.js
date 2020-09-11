// function to generate markdown for README
function generateMarkdown(data) {
  return (  
  `
  # ${data.title}
  ## Description
  * ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  
  ## Installation
  * ${data.installation}

  ## Usage
  * ${data.usage}

  ## License
  * ${data.license}

  ## Contributing
  * ${data.contributing}

  ## Tests
  * ${data.tests}
  
  ## Questions
  Please contact me with any questions you may have using the links below!
  * ${data.questionGit}
  * <${data.questionEmail}>
  `
)
}

module.exports = generateMarkdown;
