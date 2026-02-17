const parent=document.getElementById("container")

parent.addEventListener("click",(e)=>{
    if(e.target.id=="container")
    {

    }
    else{
        console.log(`${e.target.innerText} addede to the cart`)
    }
})