let arr=[-4,3,-9,-5,4,1]
let neg_count=0
let pos_count=0
let zero_count=0
for(let i=0;i<arr.length;i++)
{
 if(arr[i]<0)
  {
neg_count++;
  }
  else if(arr[i]>0)
  {
    pos_count++;
  }
  else{
    zero_count++;
  }
 
}
 console.log((pos_count/arr.length).toFixed(6));
  console.log(neg_count/arr.length);
  console.log(zero_count/arr.length);