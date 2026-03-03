let arr=new Array(1,2,3,4,5)

console.log(arr.__proto__)
console.log(arr.__proto__.__proto__)
console.log(Array.prototype.__proto__)


function hello(){}

console.log(hello.__proto__)
console.log(hello.__proto__.__proto__)
console.log(Function.prototype.__proto__)


let ar2=[1,2,3,4,5]

console.log(ar2.__proto__)