let arr1=[1, 2, 3, 4, 5]

function BubbleSort(arr)
{
    for(let i=0;i<arr.length-1;i++)
{ 
    let isSorted=false
    for(let j=0;j<arr.length-1-i;j++)
    {
        if(arr[j]>arr[j+1])
        {
            let t=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=t
            isSorted=true
        }
    }
    if(!isSorted)
    {
        return true
    }
}
return false
}
console.log(BubbleSort(arr1))