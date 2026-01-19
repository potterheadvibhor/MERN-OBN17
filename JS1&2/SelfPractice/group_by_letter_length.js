//Group strings by their length
let arr=["hi", "hello", "cat", "dog", "elephant", "rat"]

let myMap=new Map()

for(let item of arr)
{
    
    if(myMap.has(item.length))
    {
       myMap.set(item.length,[...(myMap.get(item.length)),item])
    }
        else{
            
            myMap.set(item.length,[item])
        }
    
}
console.log(myMap)