let myMap=new Map();
myMap.set("name","vibhor")
myMap.set("class","OBN17")
myMap.set("ROLL_NO","221013")
myMap.set("GRADE","10")
myMap.set({1:2},"10")
console.log(myMap)
console.log(myMap.has("name"))   // give boolean t 0r f
console.log(myMap.has("class"))
console.log(myMap.get("name"))
console.log(myMap.size)
console.log(myMap.delete("GRADE"))
console.log(myMap.keys())
console.log(myMap.entrise)

let myMap1=new Map([[1,2],[3,45]])
console.log(myMap1)
console.log(myMap1.clear())
console.log(myMap1)


