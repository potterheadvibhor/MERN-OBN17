let arr=[[1,2,3],[4,5,6],[7,8,9]]
for(let i=0;i<arr.length;i++)
  {
    for(let j=0;j<i;j++)
    {

let temp=arr[i][j];
arr[i][j]=arr[j][i]
arr[j][i]=temp}
    
  }

  for(let i=0;i<arr.length;i++)
{
    let si=0
     let ei=arr[i].length-1
      while(si<ei)
    {
        let temp=arr[i][si]
       arr[i][si]=arr[i][ei]
        arr[i][ei]=temp

         si++;
         ei--;
    }
}
console.log(arr)