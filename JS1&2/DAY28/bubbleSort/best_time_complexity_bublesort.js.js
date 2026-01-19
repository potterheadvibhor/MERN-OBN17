//Bubble Sort in Ascending Order
function AscendingbubbleSort(arr)
{
   for(let i=0;i<arr.length-1;i++)
{
   let isSorted=false;
   for(let j=0;j<arr.length-1-i;j++)
   {
   
    if(arr[j]>arr[j+1])
     {
         let temp=arr[j]
         arr[j]=arr[j+1]
         arr[j+1]=temp
         isSorted=true
        }
   }
   if(!isSorted)
   {
     break;
   }
}
return arr;
}
console.log(AscendingbubbleSort([7, "2a","2b", 9, 1, 5]));

//Bubble Sort in descending Order
function descendingbubbleSort(arr)
{
   for(let i=0;i<arr.length-1;i++)
{
   let isSorted=false;
   for(let j=0;j<arr.length-1-i;j++)
   {
   
    if(arr[j]<arr[j+1])
     {
         let temp=arr[j]
         arr[j]=arr[j+1]
         arr[j+1]=temp
         isSorted=true
        }
   }
   if(!isSorted)
   {
     break;
   }
}
return arr;
}
console.log(descendingbubbleSort([7, 2, 9, 1, 5]));