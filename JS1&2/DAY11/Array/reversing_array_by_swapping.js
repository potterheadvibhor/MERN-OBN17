let arr=[1,2,3,45,6,7]

for(let i=0;i<=Math.floor(arr.length/2);i++)
{
  let temp=arr[i];
  arr[i]=arr[arr.length-1-i]
  arr[Math.floor((arr.length/2)-1)]=temp
}
console.log(arr);