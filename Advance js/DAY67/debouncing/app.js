const inputbar=document.getElementById("ip")

function debounce(fn,delay)
{
    let timerId;
    return function()
    {
        clearTimeout(timerId)
        timerId=setTimeout(fn,delay)
    }
}


const delayApiCall=debounce(()=>{
    console.log("Api Called ")
},500)

inputbar.addEventListener("input",()=>{
    delayApiCall()
})
