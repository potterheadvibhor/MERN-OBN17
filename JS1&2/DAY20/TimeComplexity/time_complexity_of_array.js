let arr=[1,2,3,4,5,6]
for(let i=0;i<arr.length;i++)
{
  console.log(arr[i]);       //time complexity is O(n)
}



let arr2=[1,2,3,4,5]
let si=0;
let ei=arr2.length-1;

while(si<ei)
{
    let temp=arr2[si];
     arr2[si]=arr2[ei];
     arr2[ei]=temp;
     si++;
     ei--
}
console.log(arr2)            // time complexity is O(n/2)  that is O(n)



