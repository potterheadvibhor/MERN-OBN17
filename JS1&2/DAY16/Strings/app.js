//String
// in js string have three method to input "",'',``
let str="qwerty"

let str2="1234563"
let str3=`Empity ${str} String is also an array`   // can help in input an value

console.log(str.length)
console.log(str[0])    // string is also 0 index like array
console.log(str[-1])    // will give you undefined
console.log(str.charAt(2))   // wiil return which it will get 
console.log(str2.replace("3","8"))   //replace 3 by  by
console.log(str2)
console.log(str2.replaceAll("3",""))    //empity  string is also an string
console.log(str3.split(" "))   // return an array of string
console.log(str.toUpperCase())   // return an new string with all capital
console.log(str)
console.log(str.toLowerCase())// return an new string with all small

//Most important thing in String

//immutable

console.log("Vibhor jain\nhello")