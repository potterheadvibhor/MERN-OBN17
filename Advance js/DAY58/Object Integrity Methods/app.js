let obj={
    name:"Vibhor",
    class:5
}


// //preventExtensions()
// //no adding in this
// Object.preventExtensions(obj)


// obj.gender="male"
// obj.class=7
// delete obj.class
// console.log(obj)



// seal()
// no addintion and deletion in this
// Object.seal(obj)

// obj.gender="Male"
// obj.class=6
// delete obj.class
// console.log(obj)

//freeze()

Object.freeze(obj)
obj.class=9
obj.gender="male"
delete obj.class
console.log(obj)