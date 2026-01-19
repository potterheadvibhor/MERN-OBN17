// let arr=[1,2,3,3,2,1,4,5,4,5,6,7]
let arr="acciojobA"

let myMap=new Map()
for(let item of arr){
    if(myMap.has(item))
    {
        myMap.set(item,myMap.get(item)+1)
    }
    else{
        myMap.set(item,1)
    }

}

console.log(myMap)