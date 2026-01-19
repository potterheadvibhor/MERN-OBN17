let arr1=[[1,2],
         [3,4]
         ];
let arr2=[[1,2],
         [3,4]];

for(let i=0;i<arr1.length;i++)
    {
    let str=""
    for(let j=0;j<arr2.length;j++)
        {
      let sum=0;
      for(let k=0;k<arr1.length;k++)
        {
        sum+=arr1[i][k]*arr2[k][j]
        }
        str+=sum+" "
    }
    console.log(str)
   }