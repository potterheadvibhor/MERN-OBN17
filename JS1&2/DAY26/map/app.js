//map

const myMap=new Map()

console.log(myMap)


myMap.set("name","vibhor")    /// we set a value in side an Map in key Value pair
myMap.set("age",43)    /// we set a value in side an Map in key Value pair
console.log(myMap)
console.log(myMap.get("name"))   // get method get the value by using key
console.log(myMap.get("Lastname"))     //if not found give undefined


myMap.set("name","samyak")  // map replace the duplicate value
console.log(myMap)

console.log(myMap.has("name"))   // check if it 9is in the map or not and return an boolean 

myMap.delete("age")          //   dleete from map
console.log(myMap)


console.log(myMap.entries())

myMap.clear()    //clear a map

console.log(myMap)

