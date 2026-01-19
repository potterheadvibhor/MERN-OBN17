let arr=[1,2,3,4,5]
let target=3;
var twosum=function(arr,target)
{for(let i=0;i<arr.length;i++)
{

for(let j=i;j<arr.length-1;j++)
{
    if(arr[i]+arr[j]===target)
    {
        return(i,j)
    }
}
}
}


