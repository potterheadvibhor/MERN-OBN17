let arr=[1,2,3,4]
let count=0;
let arr2=[];
for(let i=0;i<arr.length;i++)
{
    let sum=0;
   for(let j=0;j<arr.length;j++)
   {
    if(j!=i)
    {
        sum+=arr[j]
    }
   }
   arr2.push(sum);
}
console.log(arr2);