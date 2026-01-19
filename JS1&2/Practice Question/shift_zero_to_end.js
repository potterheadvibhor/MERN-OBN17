let arr=[1,0,2,0,3]
let n=arr.length;
for(let i=0;i<n;i++)
{
   if(arr[i]==0)
   {
    let temp=arr[i+1];
    arr[i+1]=arr[i];
    arr[i]=temp
   }
}
console.log(arr)