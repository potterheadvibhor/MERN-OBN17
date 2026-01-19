let arr=[1,2,2,3,3,3,4,4,5,5]

console.log(arr.find((value,index)=>{ return arr.slice(index+1,(arr.length)).includes(value) }))