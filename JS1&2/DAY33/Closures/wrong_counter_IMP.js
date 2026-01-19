function counter(input)
{
    let count =0;

    if(input==="inc")
    {
        return ()=>{
    count++
    console.log(count)
        }
    }

    else if(input==="dec")
    {
return ()=>{
    count--
    console.log(count)
    }
}

    else if(input==="res")
    {
return ()=>{
    count=0
    console.log(count)
    }
}
}
let increment=counter('inc')
let decrement=counter('dec')
let reset=counter('res')

increment()
decrement()
increment()