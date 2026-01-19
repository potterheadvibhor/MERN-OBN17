let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]];

let n=arr.length;

for(let row=0;row<arr.length;row++)
{
    for(let coloumn=0;coloumn<arr[row].length;coloumn++)
    {
      if(row+coloumn==n-1)
      {
        console.log(arr[row][coloumn]);
      }
    }
}