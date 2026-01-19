let arr=[1,2,3,4,5,6]
let copy=arr

console.log("Original array",arr)
console.log("Copy Array",copy)


//After Updation
console.log("\nArray after Updation ")
copy.push(34)
console.log("Original array ",arr)
console.log("Copy Array",copy)


//Spread operatior
console.log("\nSpread Operator ")
let arr2=[1,2,3,4,5,6,7]

let copy2=[...arr2]
console.log("\nArray after Updation ")
copy2.push(34)
console.log("Original array 2",arr2)
console.log("Copy Array 2",copy2)



//object 

let obj1={ name:"vibhor",
           class:"OBN17",
           DOB:"20/11/1998"
         }
let obj2={...obj1}

obj2["DOJ"]="11/11/2025"

console.log(obj1)
console.log(obj2)

//Shallow copy
let arr4=[1,2,3,4,5,{name:"Vibhor"}]

let arr5=[...arr4]

arr5[5]["name"]="samyak"
console.log(arr5)
console.log(arr4)
