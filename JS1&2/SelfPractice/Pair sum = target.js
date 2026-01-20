let arr = [2, 7, 11, 15]
target = 9


for(let item of arr)
{
    for(let i=arr.indexOf(item)+1;i<arr.length-1;i++)
    {
        if(item+arr[i]===target)
        {
            console.log(item,arr[i])
            break;
        }
    }
}