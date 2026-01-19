let arr=[2, 4, 2, 6, 2, 8]
let target = 2
let ansarr=[]
for(let i=0;i<arr.length;i++)
{
  if(arr[i]==target)
  {
    ansarr.push(i)
  }
}
console.log(ansarr)