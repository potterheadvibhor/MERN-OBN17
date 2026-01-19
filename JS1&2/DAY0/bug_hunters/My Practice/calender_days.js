const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Enter month number (1-12):', month => {
   let a = parseInt(month);
   if(a>0 && a<12)
{
if(a==2)
{
    console.log("28");

}
else if (a === 4 || a === 6 || a === 9 || a === 11) {
  console.log("30");
}
else{
    console.log("31");

}
}
else{
        console.log("Please Enter a Valid Month");

}
  readline.close();
});