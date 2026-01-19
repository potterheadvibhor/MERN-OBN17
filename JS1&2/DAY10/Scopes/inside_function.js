// inside a function varible can be accress inside the function only cannot be access from outside no matter it is var or const or let

function checking_the_Scpes()

{
  var Block_a=1;
    let Block_b=3;
const Block_c=4;

console.log(Block_a)
console.log(Block_b)
console.log(Block_c)
}


checking_the_Scpes()