let arr=[1,2,3,4,5,6]


//using for loop
for(let i=0;i<arr.length;i++)
    {
console.log(arr[i]>6)
}

//using forof
for(let item of arr)
{
console.log(item>6)
}

//using forEach() 
arr.forEach((item,Index)=>
{
    console.log(item,Index)
})


