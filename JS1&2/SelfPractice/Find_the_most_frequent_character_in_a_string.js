//Find the most frequent character in a string

let str="mississippi"

function count_Frequency(str1){
let myMap=new Map()
    for(let item of str1)
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

let myMap1=count_Frequency(str)

 let maxkey=0
     let max=-Infinity
myMap1.forEach((values,key)=>{
   
    if(values>max)
    {    
        max=values
        maxkey=key
    }
})
console.log(maxkey)