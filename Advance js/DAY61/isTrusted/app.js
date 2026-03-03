const bt=document.getElementById("btn")

bt.addEventListener("click",(e)=>{
    if(e.isTrusted==true)
    {
        console.log("Hello")
    }
})