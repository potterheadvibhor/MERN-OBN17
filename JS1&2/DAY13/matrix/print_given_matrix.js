let arr=[[1,2,3,4,5],
         [6,7,8,9,10],
         [11,12,13,14,15]];

// console.log(arr.flat(2));
for(let i=0;i<arr.length;i++)
{
    let temp="";
    for(let j=0;j<arr[i].length;j++)
    {
        temp+=(Math.floor((arr[i][j])))+" "
    }
    console.log(temp)
    
}