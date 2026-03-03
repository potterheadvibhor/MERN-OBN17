// // "Use strict"
// // console.log(this)



// // for normal fuction
// // function hi(){
// //     console.log("Normal function",this)   // will point to window
// // }
// // hi()

// // //for normal function in strict mode
// // function hi1(){
// //   "use strict"
// //     console.log("Normal Fuction In Strict Mode",this)//in strict mode wiilgive undefined
// // }
// // hi1()

// //for arrow function
// // let fn=()=>{
    
// //     console.log("Arrow function",this)

// // }
// // fn()
// // let fn1=()=>{
// //     "use strict"
// //     console.log("Arrow function in strict Mode",this)

// // }
// //  fn1()

// //Arrow function inside an Normal function

// // function fn2(){
    
// //     console.log(this)
// //     let  innerfn=()=>{
// // console.log(this)
// //     }
// // innerfn()
// // }
// // fn2()
// //Arrow function inside an Normal function

// // function fn3(){
// //     "use strict"
// //     console.log(this)
// //     let  innerfn=()=>{
// // console.log(this)
// //     }
// // innerfn()
// // }
// // fn3()

//  //Object
//  const obj1={
//     name:'Vibhor',
//     age:25,
//     showFunction: function(){
//         console.log(this)
//     },
//     showFunctionStrictMode: function(){
//         "Use Strict"
//         console.log(this)
//     },
//     showFunction2: ()=>{
// console.log(this)
//     },
//     showFunction3: function()
//     {
//         // console.log(this)
// const inner=()=>
//     {
// console.log(this)
//     }
// inner()
// },
//     showFunction4: function()
//     {
//         console.log(this)
// function inner()
//     {
// console.log(this)
//     }
// inner()
// }
//  }
// //  console.log(obj1.showFunction())
// //  console.log(obj1.showFunction2())
// //  console.log(obj1.showFunction3())
// //  console.log(obj1.showFunction4())
//  console.log(obj1.showFunctionStrictMode())



//  const button = document.getElementById("btn");

// button.addEventListener("click", function () {
//   console.log(this);
// });



//call(), apply(), and bind()
// These methods let you manually control what this should be.


let obj2={
    name:"Vibhor",
    myName: function(){
        console.log(`my name is ${this.name}`)
    }

}
obj2.myName()
let obj3={
    name:"Vibhor",

}

let obj4={
    name:"samyak"
}

function myName(city,DOB){
    console.log(`my name is ${this.name} and i live in ${city} and my date of birth is ${DOB}`)
}

// myName.call(obj3,"delhi",20)
// myName.call(obj4,"noida",78)
// myName.apply(obj3,["noida",80])
const myNamefn=myName.bind(obj4,"noida",78)
myNamefn()
