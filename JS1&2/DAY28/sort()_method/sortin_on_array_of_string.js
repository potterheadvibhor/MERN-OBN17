// Sorting Array with strings
let arr=["z","g","j","a","d"]
arr.sort()       
console.log(arr)

// the sort method sort in lexographicalle(dictionary order)

let arr2=["q","w","asd","bbbc"]
arr2.sort()       
console.log(arr2)


//to reverse the sorting
let arr3=["z","g","j","a","d"]
arr3.sort((a,b)=>{return ( b.localeCompare(a))})

console.log(arr3)

// in case of uppercase and lowercase   i same array it wiil work in ASCII order
let arr4=["Z","G","j","a","d"]
arr4.sort()       
console.log(arr4)


let arr5=["Z","G","j","a","d"]
arr5.sort((a,b)=>{return ( b.localeCompare(a))})
console.log(arr5)