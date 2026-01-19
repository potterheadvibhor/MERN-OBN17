//Find all elements that appear exactly twice
let arr1=[1,2,3,2,4,3,5,6]

function count_Frequency(arr){
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
    return myMap
}

let myMap1=count_Frequency(arr1)
console.log(myMap1)
myMap1.forEach((values,key)=>{

    if(values==2)
    {
        console.log(key)
    }
})