// let n=1
// let t=4
// function CustomInterval(){
   
//     if(n>t)
//     {
// return
//     }
//     n++
//  console.log("hello")
//     setTimeout(CustomInterval,1000)
// }

// CustomInterval()


let id;
function mySetInterval(cd,timer)
{
  id=setTimeout(()=>{
    cd()
    mySetInterval(cd,timer)
  },timer)
}

function myclearInterval(interid)
{
    clearTimeout(interid)
}

mySetInterval(()=>{
    console.log("hello")
},1000)

// setTimeout(() => {
    myClearInterval(id)
// }, 7000)