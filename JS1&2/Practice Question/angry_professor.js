let arr=[0,0,0,0,-1,]
let k=3
let count=0;
for(let item of arr)
{
  if(item<=0)
  {
    count++;
  }
}

(count>=k)?console.log("NO"):console.log("YES")