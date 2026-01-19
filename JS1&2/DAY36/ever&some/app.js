let arr=[1,2,"3","Vibhor",true]

console.log(arr.some((value)=>{ return typeof value ==="number"}))
console.log(arr.every((value)=>{ return typeof value ==="number"}))