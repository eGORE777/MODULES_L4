const axios = require('axios');  

const fetchData = async (url) => {  
  const result = {  
    data: [],  
    isLoading: true,  
    error: null,  
  };  

  try {  
    const { data } = await axios.get(url);  
    result.data = data;  
  } catch (error) {  
    result.error = error?.message || 'Unknown error';  
  } finally {  
    result.isLoading = false;  
  }  

  return result;  
};  

module.exports = fetchData;  