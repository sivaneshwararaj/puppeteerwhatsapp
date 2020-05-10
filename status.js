const util = require('util')
const fs = require('fs');

const fs_writeFile = util.promisify(fs.appendFile)

module.exports =fs_writeFile;