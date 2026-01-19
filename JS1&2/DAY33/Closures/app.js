// function outer()
// {
// let age = 32
//   function printAge()
//     {
//          let age = 25
//         console.log(age)
//     }

//     printAge()
    

// }
// outer()

// function outer()
// {

//   function printAge()
//     {
//          //let age = 25
//         console.log(age)
//     }

//     printAge()
//     let age = 32

// }
// outer()

function outer()
{
 let age = 25
  return function printAge()
    {
        console.log(age)
    }
}
let f1=outer()
f1()
