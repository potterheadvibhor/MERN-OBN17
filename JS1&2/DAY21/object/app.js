let obj={
    name:"Vibhor",
    age:20,
    battery_percentage:90
}

console.log(obj.battery_percentage)
console.log(obj["name"])
obj.gender="Male"
console.log(obj);
obj["city"]="delhi"
console.log(obj);

delete(obj.city)
console.log(obj["battery_percentage"])
console.log(obj);
console.log(obj.ksksk);


const obj2={
    name:"ichchha",
    age:20,
    meta_data:{
        father_name:"S.C Jain",
        mother_name:"Mamta Jain",
    },
    phone_no:[9,9,3,5,1,7,6,2,9,8],
    sayHello:()=>
    {
        console.log("Hello ji")
    }


}


console.log(obj2.name)
console.log(obj2.meta_data)
console.log(obj2.meta_data.father_name)
console.log(obj2.phone_no)
console.log(obj2.phone_no[4])

obj2.sayHello()