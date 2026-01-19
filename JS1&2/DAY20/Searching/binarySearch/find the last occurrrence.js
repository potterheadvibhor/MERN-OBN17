let arr1=[1,2, 2, 2, 3, 4]
let target1 = 2


function lastOccurence(arr,target)
{
   let si=0
   let ei=arr.length-1
   let count=-1
   while(si<=ei)
   {
    let mi=Math.floor((si+ei)/2)
   if(target===arr[mi])
   {
    count=mi
    si=mi+1
   }
   else if(arr[mi]<target)
   {
     si=mi+1
   }
   else{
    ei=mi-1
   }

}
return count
}

console.log(lastOccurence(arr1,target1))


