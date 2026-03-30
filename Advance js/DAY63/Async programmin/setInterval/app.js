let n=1
const id=setInterval(()=>{
    if(n>4)
    {
        clearInterval(id)
        console.log("Reached the End")
        return
    }
    console.log(n)
    n++;
},1000)


