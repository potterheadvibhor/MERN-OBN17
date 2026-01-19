//Shallow copy

//array
let arr4=[1,2,3,4,5,{name:"Vibhor"}]

let arr5=[...arr4]

arr5[5]["name"]="samyak"
console.log(arr5)
console.log(arr4)


//object
let obj={name:"Vibhor",
         phoneNo:[9,9,3,5,1,7,6,2,9,8]
}

let obj2={...obj}
obj2.name="Samyak"
obj2.phoneNo[2]=20
console.log(obj)
console.log(obj2)