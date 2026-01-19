// Check if two arrays are equal as multisets
// (Elements and frequencies must match, order does not matter)

A = [1,2,3,21,4]
B = [2,1,21,3]

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

let myMapA=count_Frequency(A)
let myMapB=count_Frequency(B)
let ismultisets=true
if(myMapA.size===myMapB.size)
{    
myMapA.forEach((values,keys)=>{

    if(!(myMapB.has(keys)  && values===myMapB.get(keys)))
    {
        ismultisets=false;
        
    }

})}
else{
    ismultisets=false
}
console.log(ismultisets?"a MULTISET":"not a MULTISET")