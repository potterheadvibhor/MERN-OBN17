let arr=[1,2,3,2,1] 
let n=arr.length; 
for(let i=0;i<n;i++) 
{ 
for(let j=i+1;j<n;j++) 
{ 
let arr1=arr.slice(i,j+1) 
console.log(arr1)
let sum=0
for(let item of arr1)
{
sum+=item
}
if(sum>0 && arr1.length>1  && arr1.join()!==arr.join())
{ 
let arr2=[] 
for(let k=arr1.length-1;k>=0;k--) 
 { 
arr2.push(arr1[k])
} 
if(arr1.join("")===arr2.join("")  )
{ 
//console.log("Reverse ",arr2)
}
}
} 
}



function rotateRight(arr, k) {
  let n = arr.length;
  k = k % n;  // handle large rotations
  
  if (k === 0) return arr;
  
  let part1 = arr.slice(-k);       // last k elements
  let part2 = arr.slice(0, n - k); // remaining first part
  
  return part1.concat(part2);
}

console.log(rotateRight([1,2,3,4,5], 2));