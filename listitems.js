var fs = require('fs');

try {  
    var data = fs.readFileSync('contactlist.txt', 'utf8');
      
} catch(e) {
    console.log('Error:', e.stack);
}

let data1=data.split("\n");

module.exports = data1;


  