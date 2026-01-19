let arr=[[1,2,3],
         [4,95,6],
         [7,8,9]];
let max=-Infinity;
for(let row=0;row<arr.length;row++)
{
    
for(let coloumn=0;coloumn<arr[row].length;coloumn++)
{
  if(arr[row][coloumn]>max)
  {
    max=arr[row][coloumn];
  }
}
}
console.log(max)