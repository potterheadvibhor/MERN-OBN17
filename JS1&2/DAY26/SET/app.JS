//Sets in js
//syntax
const mySet= new Set()

console.log(mySet)

//size of set
console.log("Size of Set",mySet.size)


//adding value to set
mySet.add(1)
mySet.add(2)
mySet.add(3)
//set are hetrogenious
mySet.add("r")     
mySet.add([1,2,3,4,5,6])     
mySet.add({name:"vibhor"})     //object can be add in set
 // in set we can't add duplicate value it removes duplicate by itself
mySet.add(1)
mySet.add(2)
mySet.add(3)


console.log(mySet)
console.log("Size of Set",mySet.size)

//deleting vale from set
mySet.delete("a")
console.log(mySet)
console.log("Size of Set",mySet.size)


//value that are not present in set 
mySet.delete("h")
console.log(mySet)
console.log("Size of Set",mySet.size)


//has method : checks whether a value is present in set and return an boolean

console.log(mySet.has(1))
console.log(mySet.has("p"))

//.clear method: removes all values from an set

mySet.clear();

// creating a set
const mySet2= new Set()

mySet2.add(1);
mySet2.add(2);
mySet2.add(3);
mySet2.add(4);


console.log(mySet2.entries())   ///Returns an iterable of [v,v] pairs for every value v in the set.

console.log(Array.from(mySet2))   // creating a Array from a set

let myset3=new Set();

myset3.add("j")
myset3.add("a")
myset3.add("i")
myset3.add("n")

console.log(myset3)

console.log(typeof((Array.from(myset3)).join("")))


//first method for looping over sets  by using for each
myset3.forEach((item)=>{
    console.log(item)
})

console.log(myset3.entries())   // entries create an [value,value] iterator from the set//[Set Entries] {
//   [ 'j', 'j' ],
//   [ 'a', 'a' ],
//   [ 'i', 'i' ],
//   [ 'n', 'n' ]
// }


// secound method by using .entries()
let Entries=myset3.entries()
for(let item of Entries)
{
  console.log(item)
}



// third method by using .values()

console.log(myset3.values())     // create an only value iterator  [Set Iterator] { 'j', 'a', 'i', 'n' } 
let Values=myset3.values();

for(let item of Values)
{
    console.log(item);
}