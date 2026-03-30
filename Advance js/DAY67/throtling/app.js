const inputbar=document.getElementById("ip")

function throttle(fn,delay)
{
    let prev=0
    return function()
    {
        let now=Date.now()
        if(now-prev>delay)
        {
            fn()
            prev=Date.now()
        }
    }
}


const throttleApiCall=throttle(()=>{
    console.log("Api Called ")
},500)

inputbar.addEventListener("input",()=>{
    throttleApiCall()
})