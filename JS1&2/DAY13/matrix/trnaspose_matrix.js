let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]];

for(let r=0;r<arr.length;r++)
{
for(let c=0;c<r;c++)
{
  let temp=arr[r][c]
  arr[r][c]=arr[c][r]
  arr[c][r]=temp
}
}
console.log(arr); 









 