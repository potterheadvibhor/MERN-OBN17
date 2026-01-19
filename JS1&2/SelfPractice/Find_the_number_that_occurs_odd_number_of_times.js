//Find the number that occurs odd number of times
let str=[1,2,3,2,3,1,3]

function count_Frequency(str)
{
    let myMap=new Map()
    for(let item of str)
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
let myMap2=count_Frequency(str)
myMap2.forEach((values,key) => {
    
        if(values%2!=0)
        {
            console.log(key)
        }
    
});