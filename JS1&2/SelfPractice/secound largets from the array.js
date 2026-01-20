let arr=[78,54,65,45,21,49,43,58,12,456]
let max=-Infinity
let secoundlargest=0
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
                secoundlargest=max
        max=arr[i]
    }
}

console.log(max)
console.log(secoundlargest)