let arr=[1,2,3,4,5,6,7,8,9,10]
let n=1;
let s=10;
let flag=false;
for(let i=0;i<arr.length-(n-1);i++)
{
    let sum=0;
   let tempArr= arr.slice(i,i+n);
  for(let item of tempArr)
    {
    sum+=item;

  }
  console.log(sum)
  if(sum===s)
  {
    flag =true;
 break;
  }

}
flag?console.log("Yes"):console.log("No")