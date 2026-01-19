//sorting o integer array

let arr7=[99,10,12,11,1,2,32,22,30,3,9]
arr7.sort()
console.log(arr7)    // this sort in lexicographical order

// to get out of lexicographical order
let arr8=[99,10,12,11,1,2,32,22,30,3,9]
arr8.sort((a,b)=>a-b)     //in ascending order small to largeest
console.log(arr8)  

let arr8_1=[99,10,12,11,1,2,32,22,30,3,9]
arr8_1.sort((a,b)=>b-a)     //in desending order  largeest to small
console.log(arr8_1)  



