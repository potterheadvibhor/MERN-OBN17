//Using StructuredClone() method
//array
let arr4=[1,2,3,4,5,{name:"Vibhor"}]

let arr5=structuredClone(arr4)

arr5[5].name="Samyak"
console.log(arr5)
console.log(arr4)


//object
let obj={name:"Vibhor",
         phoneNo:[9,9,3,5,1,7,6,2,9,8]
}

let obj2=structuredClone(obj)
obj2.name="Samyak"
obj2.phoneNo[2]=20
console.log(obj)
console.log(obj2)

//cant clone a function
let arr=[{name:"Vibhor",
          hello: function()
         {
          console.log("hello")
         }
}]

let arr2=structuredClone(arr)

console.log(arr2)