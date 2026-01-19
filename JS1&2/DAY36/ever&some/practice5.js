//Check if all values are numbers AND some values are negative.
const arr = [10, 5, 20, 1];

console.log(arr.every((value)=>{ return typeof value =="number"}) && arr.some((value)=>{return value<0}))