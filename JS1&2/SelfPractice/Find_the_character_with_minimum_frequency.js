// Find the character with minimum frequency
let arr="programming"

// let arr=[1,2,3,2,4,2,5,3,3,3]
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
let min=Infinity
let minKey=0
myMap.forEach((value,key)=>{
    if(value<min)
    {
        min=value
        minKey=key
    }
})

console.log(minKey)