const bcrypt = require('bcrypt');  

async function hashPasswords(passwords) {  
  const saltRounds = 10;  
  const times = [];  

  for (const password of passwords) {  
    const start = Date.now();  

    try {  
      await bcrypt.hash(password, saltRounds);  
    } catch (error) {  
      console.error(`Ошибка хеширования пароля "${password}":`, error.message);  
    }  

    const end = Date.now();  
    times.push(end - start);  
  }  

  console.log('Время хеширования паролей:', times);  
}  

module.exports = hashPasswords;  