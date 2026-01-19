let str="swiss"

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
console.log(myMap)

for(let item of str)
{
    if(myMap.get(item)==1)
    {
         console.log(item)
         break
    }
}