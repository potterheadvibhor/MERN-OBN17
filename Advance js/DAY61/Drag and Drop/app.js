const dragtext=document.getElementById("dragText")
const right=document.getElementById("right")

dragtext.addEventListener("dragstart",(e)=>{
    e.dataTransfer.setData("text",e.target.id)
})

right.addEventListener("dragover",(e)=>{
    e.preventDefault()
})
right.addEventListener("drop",(e)=>{
    e.preventDefault()
        const id=e.dataTransfer.getData("text")
        const element= document.getElementById(id);
        right.appendChild(element)

})

