let arr=[1,2,3,2,4,2,5,3,3,3]
let myMap=new Map()
for(let item of arr)
{
    if(myMap.has(item))
    {
        myMap.set(item,myMap.get(item)+1)
    }
    else{
        myMap.set(item,1)
    }
}
let max=-Infinity
let maxKey=0
myMap.forEach((value,key)=>{
    if(value>max)
    {
        max=value
        maxKey=key
    }
})

console.log(maxKey)