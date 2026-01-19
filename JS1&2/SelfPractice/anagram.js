let str1="listen"
let str2="silent"

function count_Frequency(str)
{
    let myMap=new Map()
    for(let item of str)
    {
      if(myMap.has(item))
      {
        myMap.set(item,myMap.get(item)+1)
      }
      else{
        myMap.set(item,1)
      }
    }
    return myMap
}
let map1=count_Frequency(str1)
let map2=count_Frequency(str2)
let ananagram=true
if(map1.size===map2.size)
{
map1.forEach((value,key)=>{
   if (!(map2.get(key)==value))
   {
       ananagram=false
   }
})
}
console.log(ananagram?"an anagram":"Not an anagram")
