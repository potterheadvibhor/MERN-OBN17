let n=25;
let s=""+n;
let arr=s.split("")
let sum=0;
for(let i=0;i<arr.length;i++)
{
  sum+=Number(arr[i])
}
console.log(sum);
