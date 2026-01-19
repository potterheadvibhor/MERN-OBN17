let arr=[[1, 2, 3],
[6,7, 8],
[11, 12, 13] 
 ]
 for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<i;j++)
    {

let temp=arr[i][j];
arr[i][j]=arr[j][i]
arr[j][i]=temp}
    
  }

  console.log(arr)