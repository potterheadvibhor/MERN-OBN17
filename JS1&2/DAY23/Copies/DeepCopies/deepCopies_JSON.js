//Using json
let arr4=[{name:"samyak"},{name:"Vibhor"},{name:"Ichahha"}]

let arr5=JSON.parse(JSON.stringify(arr4))

arr5[0].name="drishti"

console.log(arr4)
console.log(arr5)

//limitation of json
//Functions, undefined, and certain other non-serializable values are lost when using JSON.stringify().
let arr=[{name:"Vibhor",
          hello: function()
         {
          console.log("hello")
         }
}]


let arr2=JSON.parse(JSON.stringify(arr))

console.log(arr2)