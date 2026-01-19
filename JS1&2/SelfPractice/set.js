// let mySet=new Set()
// mySet.add(5)
// mySet.add(6)
// mySet.add(7)
// console.log(mySet)
// console.log(mySet.has(5))
// console.log(mySet.has(0))
// mySet.delete(6)
// console.log(mySet)
// console.log(mySet.size)
// console.log(mySet.clear())
// console.log(mySet)


//loopin over set
let mySet1=new Set([1,2,3,4,5,{name:"vibhor"},{name:"vibhor"},"1",NaN,NaN])
console.log(mySet1.size)
console.log(mySet1)
for(let item of mySet1)
{
    console.log(item)
}


mySet1.forEach((element,index) => {
    console.log(element,index)
});

for(let item of mySet1.entries())
{
    console.log(item)
}
for(let item of mySet1.values())
{
    console.log(item)
}
console.log(...mySet1)
let mySetString=new Set("programming")
console.log(mySetString.size)


let arr=[1,2,3,4,5,4]
let mySet4=new Set(arr)
console.log(arr.length===mySet4.size ?"yes ":"no")

// Find common elements between two arrays using Set.

let arr2=[2,45,56,5]
let MySet5=new Set(arr2)

for(let item of MySet5)
{
    if(arr.includes(item))
    {
        console.log(item)
    }
}


A = [1, 2, 3, 4]
B = [3, 4, 5, 6]


let mySet6=new Set(B)
for(let item of A)
{
    if(!mySet6.has(item))
    {
   console.log(item)
    }
}

let mySet7=new Set(A)
for(let item of B)
{
    mySet7.add(item)
}
console.log(Array.from(mySet7))


let a1="abcr"
let b1="bcar"

function FindSimilar(a,b)
{

let mysetA=new Set(a)
let mysetB=new Set(b)

if(mysetA.size!==mysetB.size)
{
 return false
}
   for(let item of mysetB)
   {
if(!mysetA.has(item))
{
      return false
}
   }
   return true


}
console.log(FindSimilar(a1,b1))

console.log((Array.from(new Set(("I love coding and I love javascript").split(" ")))).join(" "))

let mySet11=new Set([1,2,3,4,5,{name:"vibhor"},{name:"vibhor"},"1",NaN,NaN])

console.log(Array.from(mySet11))

mySet11.forEach((element,index)=>{
    console.log(element,index)
})