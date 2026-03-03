/* Session Striage */

const inputTag=document.getElementById("Input")
const submitbtn=document.getElementById("Submit")
const getbtn=document.getElementById("get")
const removebtn=document.getElementById("remove")
const container=document.getElementById("parent")



submitbtn.addEventListener("click",()=>{
    // const child=document.createElement("p")
    // child.innerText=inputTag.value
    // container.append(child)
    sessionStorage.setItem(`${inputTag.value}`,inputTag.value)
})
getbtn.addEventListener("click",()=>{
    
    const child=document.createElement("p")
    child.innerText=sessionStorage.getItem(`${inputTag.value}`)
    container.append(child)
    
})
removebtn.addEventListener("click",()=>{
    sessionStorage.clear()
})