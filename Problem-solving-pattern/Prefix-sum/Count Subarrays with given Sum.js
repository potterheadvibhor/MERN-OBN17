let arr1=[10,2,-2,-20,10]
let target1=-10



function count_Subarray_Sum_Equal_k(arr,target)
{
  let count=0
  let mymap=new Map();
mymap.set(0,1)
let prefixSum=0
for(let i=0;i<arr1.length;i++)
{
  prefixSum+=arr1[i] 
  if(mymap.has(prefixSum-target))    
  {
    console.log(prefixSum-target,mymap.get(prefixSum-target))
    count +=mymap.get(prefixSum-target)
  }
  mymap.set(prefixSum,(mymap.get(prefixSum)||0)+1)  //saving the prefix sum in the  map

}
return count
}

console.log(count_Subarray_Sum_Equal_k(arr1,target1))

