let str="leetcode"
let myMap=new Map()

for(let i=0;i<str.length;i++)
{
   if(myMap.has(str[i]))
   {
     myMap.set(str[i],myMap.get(str[i])+1)
   }
   else
   {
         myMap.set(str[i],1)

   }
}
console.log(myMap)
for(let item of myMap)
{
    if(myMap.get(item)==1)
    {
       console.log(myMap.get(item));
    }
}


