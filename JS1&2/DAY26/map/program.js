let arr=[1,2,3,4,1,2,3,1,2,1,10]
const map=new map()



for(let item of arr)
{
    if(map.has(item))
    {
      map.set(item,map.get(item)+1)
    }
    else{
        map.set(item,1)
    }
}




for(let item of arr)
{ 
    map.set(item,map.get(item)== undefined?1:map.get(item)+1)

}

console.log(map);




