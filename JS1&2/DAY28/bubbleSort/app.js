//worst time complexity alwaiys o(n**2)
function WorstbubbleSort(arr)
{
   for(let i=0;i<arr.length-1;i++)
{
  
   for(let j=0;j<arr.length-1;j++)
   {
   
    if(arr[j]>arr[j+1])
     {
         let temp=arr[j]
         arr[j]=arr[j+1]
         arr[j+1]=temp
        
        }
   }
  
}
return arr;
}
console.log(WorstbubbleSort([7, 2, 9, 1, 5]));

//best -> will stop execution if no swaps happen
function bestbubbleSort(arr)
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
console.log(bestbubbleSort([7, 2, 9, 1, 5]));