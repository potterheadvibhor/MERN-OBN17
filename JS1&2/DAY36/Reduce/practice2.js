let arr=[-10, -5, -20, -8]

console.log(arr.reduce((accu,cur)=>{ return accu>cur?accu:cur},-Infinity))