let arr=[1, 3, 3, 5, 3, 7]
let target = 3
function NumberAppears(arr,target)
{
    let count=0
    for(let i=0;i<arr.length;i++)
{
    if(arr[i]==target)
        {
            count++
        }
}
return count
}

console.log(NumberAppears(arr,target))