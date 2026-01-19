let arr=[-5, -2, -10, -3]
let Max=Math.max(...arr);
let secound_Max=-Infinity;
for(let i=0;i<arr.length;i++)
{
   if(arr[i]>secound_Max && arr[i]<Max)
   {
     secound_Max=arr[i];
   }
}
console.log(secound_Max);