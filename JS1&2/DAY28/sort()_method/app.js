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
arr3.sort((a,b)=>{return b.localeCompare(a)})

console.log(arr3)

// in case of uppercase and lowercase   i same array it wiil work in ASCII order
let arr4=["Z","G","j","a","d"]
arr4.sort()       
console.log(arr4)



//sorting on Array of Bollean

let arr5=[true,false,false,true,false]
arr5.sort()
console.log(arr5)


let arr6=[true,false,false,true,false]
arr6.sort((a,b)=>b-a)
console.log(arr6)



//sorting o integer array

let arr7=[99,10,12,11,1,2,32,22,30,3,9]
arr7.sort()
console.log(arr7)    // this sort in lexicographical order
// to get out of lexicographical order
let arr8=[99,10,12,11,1,2,32,22,30,3,9]
arr7.sort((a,b)=>a-b)
console.log(arr7)  

