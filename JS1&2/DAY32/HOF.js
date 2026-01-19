//Higher Order Fuction(HOF)
// Return a function 
// Method one by saving in another variable then printing it
function h()
{
    return ()=>
    {
        console.log("hello")
    }
}

const r1= h()
r1()

//Method 2 by directly calling it
function h2()
{
    return ()=>
    {
        console.log("hello")
    }
}

h2()()


//by passing as an arguments
//Method one by passing an function inside call
function h3(fn){
fn()
}

h3(()=>
{
    console.log("Hello3")
})
