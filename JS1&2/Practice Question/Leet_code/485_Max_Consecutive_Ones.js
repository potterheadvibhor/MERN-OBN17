let arr=[1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

var findMaxConsecutiveOnes = function(arr) {
    let count=0;
    let maxCount=-Infinity;
    for(let i=0;i<arr.length;i++)
{
if(arr[i]===1)
{
    count++;
}
else
    {
         maxCount=Math.max(maxCount,count)
        count=0;
}
}
 maxCount=Math.max(maxCount,count)
    return maxCount
}

console.log(findMaxConsecutiveOnes(arr))