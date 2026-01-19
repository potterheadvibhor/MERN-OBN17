
function counter()
{
    let count=0;
    
    return{
        inc:()=>
        {
            count++
            console.log(count)
        },
        dec:()=>
        {
            count--
            console.log(count)
        },
        res:()=>
        {
            count=0
            console.log(count)
        }
    }
}

let mycounter=counter()
mycounter.inc();//1
mycounter.inc();//2
// mycounter.inc();//3
mycounter.dec();//2
mycounter.dec();//1
// mycounter.dec();//0
mycounter.res();//0