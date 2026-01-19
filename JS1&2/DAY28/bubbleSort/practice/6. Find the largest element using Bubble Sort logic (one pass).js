let arr1=[2, 9, 1, 5, 6]
function FindLargest(arr)
{
    for(let j=0;j<arr.length-1;j++)
    {
   if(arr[j]>arr[j+1])
   {
        let t=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=t
   }
    }
    return arr[arr.length-1]
}
console.log(FindLargest(arr1))