let N= 153


function Armstrong(n)
{   
        let sum=((""+n).split("")).reduce((arms,value)=>
            ( Number(value) **3+arms),0
    )
           
            
       return sum=== N;    
    

}

console.log(Armstrong(N))