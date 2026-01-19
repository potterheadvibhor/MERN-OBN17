let arr=[1,1,1,1]
let count=1;
for(let i=0;i<arr.length;i++)
{
if(arr[i]>arr.at(0))
{
count++;
}
}
console.log(count);