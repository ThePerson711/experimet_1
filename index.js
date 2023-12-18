const fs = require('fs');

let result = 'saf';
f_1();
function f_1() {
  if ( fs.existsSync('some.txt') == false ) {
    fs.writeFileSync('some.txt', 'Hello World!');
    console.log('file exists');
  } else {
    console.log('file don`t exists');
  }
  
  result = fs.readFileSync('some.txt', 'utf-8');
  
  console.log(result);
  document.getElementById('textarea').innerHTML = result;

  fs.writeFileSync('some.txt', result + '\nHello World!');
  
  console.log('Text added');
}