function MaximumFrequencyChar(str)
{

let map=new Map()


for(let item of str)
{
    if(map.has(item))
    {
       map.set(item,map.get(item)+1)
    }
    else{
        map.set(item,1)
    }
}

let max=-Infinity
let maxChar=new Set()

for(let [key,value] of map)
{
    
    if(value>max)
    {
        max=value
    }
}
for(let item of str)
{
  if(map.get(item)===max)
  {
    maxChar.add(item)
  }
}}