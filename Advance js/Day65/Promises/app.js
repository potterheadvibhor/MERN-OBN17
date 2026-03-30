// console.log(Promise.prototype.__proto__.__proto__)
//mimicing an working of promise or making your own custom promise
const p1= new Promise((resolve,reject)=>{

let getdata=[{c:3},{b:2},{a:1}]
setTimeout(()=>{
    if(getdata.length)
{
    resolve(getdata)
}
else{
    reject("Not Succesful")
}
},3000)



})
p1
.then((data)=>{
       console.log(data)
})
.catch((data)=>{
    console.log(data)
})
