console.log("Map")

let arr=[1,2,3,4,5,6,7]

let modified_Arr=arr.map((value,index)=>
{
    return value*2+index
})
console.log(modified_Arr)
console.log(arr)


console.log(arr.map(value=> value*3))// another variation of using arraow function 