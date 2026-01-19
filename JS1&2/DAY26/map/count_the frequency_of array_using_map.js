let arr=[1,2,3,4,54,3,2]

let map=new Map()


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

console.log(map)

let map2=new Map()
for(let item of arr)
{
    map2.set(item,map2.has(item)==undefined ? 1 :map2.get(item)+1)
}

console.log(map)