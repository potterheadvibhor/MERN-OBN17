 let arr=[1,2,3,4,5,6,7,8,9]
let myMap=new Map()
 for(let item of arr)
 {
 
    if(myMap.has((item%3)))
    {
        myMap.set(item%3,[...myMap.get(item%3),item])
    }
    else{
        myMap.set(item%3,[item])
    }
 }
 console.log(myMap)