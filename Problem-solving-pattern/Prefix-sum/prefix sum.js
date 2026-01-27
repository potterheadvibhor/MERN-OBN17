let arr1=[1,2,3,4,5,6]


//  prefix sum in same array we can also do it in different array
function Perfix_sum(arr)
{
 for(let i=1;i<arr.length;i++)
 {
      arr[i]=arr[i-1]+arr[i]
 }
 return arr
}
console.log(Perfix_sum(arr1))