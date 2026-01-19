let arr=[4, 5, 0, -2, -3, 1];
let k=5;
let count=0;
for(let i=0;i<arr.length;i++)
    {
        let sum=0;
        for(let j=i;j<arr.length;j++)
    {    
       sum+=arr[j]
      if(sum%k==0)
      {
        count++
      }
    }
    }
    console.log(count);
