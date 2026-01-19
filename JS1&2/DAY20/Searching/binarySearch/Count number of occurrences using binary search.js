let arr1=[2, 3, 4,90,90]
let target1 = 90

function Occurence(arr,target,findfirst)
{
   let si=0
   let ei=arr.length-1
   let o=-1
   while(si<=ei)
   {
    let mi=Math.floor((si+ei)/2)
   if(target===arr[mi])
   {
    if(findfirst)
        {
            o=mi
   ei=mi-1
        }
   else
    {
        o=mi
   si=mi+1
}
    
   }
   else if(arr[mi]<target)
   {
     si=mi+1
   }
   else{
    ei=mi-1
   }

}
return o
}
let LO=Occurence(arr1,target1,false)
let FO=Occurence(arr1,target1,true)
let count=0
if(LO<0 || FO<0)
{
 count=LO-FO+1
}
else{
    count=-1
}

console.log(count)



