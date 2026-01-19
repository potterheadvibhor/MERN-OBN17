let arr=[10, 4, 7, 1, 9]

for(let i=0;i<arr.length-1;i++)
{
    let j=i+1
   while(j>0 && arr[j]<arr[j-1])
   {
   
       let t=arr[j]
        arr[j]=arr[j-1]
       arr[j-1]=t 
       j--
   }
}
console.log(arr)