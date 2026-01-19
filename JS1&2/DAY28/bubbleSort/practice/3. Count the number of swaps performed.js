let arr1=[3, 2, 1]

function BubbleSort(arr)
{
    let count=0
    for(let i=0;i<arr.length-1;i++)
{ 
    let isSorted=false
    for(let j=0;j<arr.length-1-i;j++)
    {
        if(arr[j]>arr[j+1])
        {
            count++
            isSorted=true
            let t=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=t
        }
    }
    if(!isSorted)
    {
        console.log(arr)
        break
    }
}
return count
}
console.log(BubbleSort(arr1))