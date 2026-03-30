const container=document.getElementById("Container")
const resp=fetch('https://hp-api.onrender.com/api/characters')


resp
.then((res)=>{
    return res.json()
})
.then((data)=>{
    for(let item of data)
    {
        const card=document.createElement("div")
        const img=document.createElement("img")
        const name=document.createElement("p")

        card.classList.add("card")
        img.classList.add("img")
        name.classList.add("name")

        img.src=item.image || "https://img.freepik.com/free-vector/hand-drawn-esoteric-pattern-design_23-2149346196.jpg?semt=ais_hybrid&w=740&q=80"
        name.innerText=item.name
        card.append(img,name)
        container.append(card)
    }
})
.catch(()=>{
    console.log("failure")
})



async function hello(params) {
    return "hello"
}

hello().then((data)=>{
    console.log(data)
})


console.log(setTimeout(()=>{"hello"},100))


