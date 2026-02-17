let arr1=[10,2,-2,-20,10]
let t=9


//  prefix sum in same array 
function Perfix_sum(arr)
{
     
 for(let i=1;i<arr.length;i++)
 {
      arr[i]=arr[i-1]+arr[i]
 }
 return arr
}
console.log(Perfix_sum(arr1))
