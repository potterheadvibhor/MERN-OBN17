let arr=[1,2,3,456,78,0]

// console.log(Math.max(...arr))
// console.log(Math.min(...arr))

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i])
}


for (const item of arr) {

    console.log(item)
    
}

arr.forEach((value,index) => {

    console.log(value,index)
    
});

