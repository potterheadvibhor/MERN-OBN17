const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter month number (1-12):', month => {
   let days = parseInt(month);

let a= parseInt(days/7);


console.log("no of week=",a);
console.log("no of days left=",days-(a*7));

});