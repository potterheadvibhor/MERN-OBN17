let myMap=new Map()

myMap.set("name","Vibhor")
myMap.set("age",23)
myMap.set("DOB","20-11-1998")
myMap.set("Adress",284403)


console.log(myMap);


//looping over map

for(let item of myMap)
{
   console.log("for of",item);
}

//forEach()

myMap.forEach((key,value)=>
{
   console.log(value,key)
})