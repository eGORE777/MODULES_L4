module.exports = function sortStrings(array) {  
  const trimmedArray = array.map(item => item.replace(/\s+/g, ''));  
  return trimmedArray.sort();  
};  