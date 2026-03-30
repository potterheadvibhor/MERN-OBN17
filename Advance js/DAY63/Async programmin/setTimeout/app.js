console.log("Start")

const id1=setTimeout(()=>{console.log("Mid 1 secound")},1000)
const id2=setTimeout(()=>{console.log("Mid 2 secound")},2000)
setTimeout(()=>{console.log("Mid 3 secound")},3000)
setTimeout(()=>{console.log("Mid 4 secound")},4000)

console.log(id1)
clearTimeout(id2)
console.log(id2)
console.log("End")



// Start
// End
// Mid 0 secound
// Mid without secound
// Mid 2 secound
// Mid 1 secound