// var Global_a=10;
// let Global_b=3;
// const Global_c=4;

// console.log(a)
// console.log(b)
// console.log(c)


// // block start

// {
//     var Block_a=1;
//     let Block_b=3;
// const Block_c=4;

// console.log(Block_a)
// console.log(Block_b)
// console.log(Block_c)
// }

// //Block end

// console.log(Block_a)   //will wpork as it acts as an Global varibale as decleared inside var
// console.log(Block_b)     // will show error cannot be acces outside block
// console.log(Block_c)


// inside a function
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

console.log(Block_a)
console.log(Block_b)
console.log(Block_c)

checking_the_Scpes()