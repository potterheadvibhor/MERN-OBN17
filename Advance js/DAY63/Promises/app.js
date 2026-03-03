const url="https://hp-api.onrender.com/api/characters"
const response=fetch(url)
const imageContainer=document.getElementById("image")

response
.then((res)=>{
    return res.json()

})
.then((data)=>{
    console.log(data)
    // console.log(data[0].name)
    // console.log(data[0].name)
    // console.log(data[0].image)
    
    const child=document.createElement("p")
    imageContainer.append(data[0].name)
})
.catch(()=>{
    console.log("failed")
})
.finally(()=>{
    console.log("finally here")
})