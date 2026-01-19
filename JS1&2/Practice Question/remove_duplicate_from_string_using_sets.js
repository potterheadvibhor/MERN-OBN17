
let str= "VibhorVibhor"
let arr2=str.split("");
let myname=new Set(arr2);
console.log(myname);

console.log(((Array.from(myname)).join("")))