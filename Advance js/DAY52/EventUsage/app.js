const btn=document.getElementsByTagName("button")
const lightmode=btn[0]
const darkmode=btn[1]

lightmode.addEventListener("click",()=>{
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
})
darkmode.addEventListener("click",()=>{
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
})