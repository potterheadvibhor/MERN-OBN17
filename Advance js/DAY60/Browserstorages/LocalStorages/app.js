console.log("ok")
/* Local Storage
Local Storage is part of the Web Storage API. It allows you to store key–value pairs in the browser that persist even after refresh or browser restart.
Scope → Same Origin (protocol + domain + port)
Lifetime → Permanent (until manually cleared)
Size → ~5–10MB (browser dependent)
Data Type → String only
API Type → Synchronous (blocks main thread)

 */
const inputTag=document.getElementById("input")
const SubmitBtn=document.getElementById("submit")
const GetBtn=document.getElementById("get")
const RemoveBtn=document.getElementById("remove")
const container=document.getElementById("parent")

SubmitBtn.addEventListener("click",()=>{
   let user=inputTag.value
   localStorage.setItem(`${user}`,JSON.stringify(user
   ))
})
GetBtn.addEventListener("click",()=>{
    console.log(localStorage.getItem("name"))
    const child=document.createElement("p")
    child.innerText=inputTag.value
    container.append(child)

})
RemoveBtn.addEventListener("click",()=>{

    localStorage.removeItem(`${inputTag.value}`)
})
// window.addEventListener("load",()=>
// {
//     console.log(localStorage.getItem("data"))
// })

