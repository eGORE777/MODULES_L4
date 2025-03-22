const fs = require('fs-extra');  
const path = require('path');  

const createDirectory = async (directory) => {  
  await fs.ensureDir(directory);  
};  

const writeFile = async (file, content) => {  
  await fs.writeFile(file, content, 'utf8');  
};  

module.exports = {  
  createDirectory,  
  writeFile,  
};  