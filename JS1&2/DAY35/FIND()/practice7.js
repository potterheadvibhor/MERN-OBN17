let arr=[10, 20, 30, 40, 50]
var sum=0;
console.log(arr.find((value)=>{ 
    sum=sum+value
    return sum>=60}))