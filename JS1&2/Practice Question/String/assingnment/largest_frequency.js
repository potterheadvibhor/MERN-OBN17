let str="aabbbccc"
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
let maxChar=[]
for(let [key,value] of map)
{
    
    if(value>=max)
    {
        
        max=value

    }

}

console.log(max)