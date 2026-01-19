let arr1=[3, 1, 2]

function SelectionSortPass(arr)
{
   for(let i=0;i<arr.length-1;i++)
   {
    let min=i
    for(let j=i+1;j<arr.length;j++)
    {
     if(arr[min]>arr[j])
     {
        min=j
     }
    }
    if(min !==i){
        let t=arr[min]
        arr[min]=arr[i]
        arr[i]=t
        console.log(arr)
     }
   }
}
SelectionSortPass(arr1)