//Conventional Function
// function h(name)
// {
//     console.log("hello "+ name)
// }
// console.log(h("Vibhor"))   // function by default return Undefined
function h(name)
{
    return ("hello "+ name)
   
}
console.log(h("Vibhor"))   

//functional Expressions
let x= function(name)
{
     return name
}

console.log(x("Vibhor"))

/// arrow function

let sq=(n)=> n*n;

console.log(sq(2))

i=5
console.log(i++ + ++i)

