let obj={
    name:"Vibhor",
    Address:{
        city:"Lalitpur",
        pincode:284403,
        state:"Uttar Pradesh",
        fullAddress:{
            address_line1:"Bahubali nagar"
        }
    }

}

console.log(obj)
console.log(obj.Address)
console.log(obj.Address.fullAddress)
//console.log(obj.Address.fullAddre.address_line1)// will give erroe 
console.log(obj?.Address?.fullAddre?.address_line1)     // wiil give undefined

console.log("hello")