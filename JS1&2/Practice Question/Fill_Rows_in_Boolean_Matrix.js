// let arr=[
//   [1, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 1, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 1]
// ]

let arr=[[1,0]
,[0,1]]

for(let i=0;i<arr.length;i++)    //row
{
   if(arr[i].includes(1))
   {
   for(let j=0;j<arr[i].length;j++)    //coloumn
   {
   if(arr[i][j]===0)
   {
      arr[i][j]=1
   }
   }
   }
}
console.log(arr)