let arr=["banana", "apple", "mango", "grapes"]

console.log(arr.sort((a,b)=>a.localeCompare(b)))

let arr1=[10, 2, 45, 1, 9]

console.log(arr1.sort((a,b)=>a-b))


console.log(arr1.sort((a,b)=>b-a))


console.log([...arr1].sort((a,b)=>a-b))
console.log(arr1)

let obj=[
  { name: "A", age: 30 },
  { name: "B", age: 20 },
  { name: "C", age: 25 }
]


console.log(obj.sort((a,b)=>a.age-b.age))

let chararr=["apple", "kiwi", "banana", "fig"]

console.log(chararr.sort((a,b)=>a.length-b.length))


let arr3 = ["banana", "Apple", "cherry"];
console.log(arr3.sort())
console.log(arr3.sort((a, b) => a.localeCompare(b)));

let arr4=("javascript").split("")


console.log(arr4.sort((a, b) => a.localeCompare(b)));

let arr5=[1, 2, 3, 4, 5, 6, 7]

console.log(arr5.sort((a,b)=>(a%2)-(b%2)))

let arr6=[-10, -5, 2, 7, -3]

console.log(arr6.sort((a,b)=>Math.abs(a)-Math.abs(b)))

let obj2=[
  { name: "Rahul", marks: 90 },
  { name: "Aman", marks: 95 },
  { name: "Neha", marks: 90 }
]


console.log(obj2.sort((a,b)=>a.marks===a.marks?(a.name.localeCompare(b.name)):a.marks-b.marks))