const fs = require('fs')
const directory =  `file://${__dirname}/npm`

let description = {
  "directory": `${directory}`
}

let donneesdesc = JSON.stringify(description)
fs.writeFileSync('function/options.json', donneesdesc)