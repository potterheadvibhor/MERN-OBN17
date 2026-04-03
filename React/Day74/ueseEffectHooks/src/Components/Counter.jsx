import { useEffect, useState } from "react"

export function Counter()
{
    let[count,isSetCounter]=useState(0)
    useEffect(()=>{
     let id=setInterval(() => {
        console.log("Mount")
     }, 1000);

     //cleanUp Function
     return ()=>{
        clearInterval(id)
     }
    })
    return(
        <div>
            <div>
                  <label>{count}</label>
            </div>
          

            <button onClick={()=>{
                isSetCounter(count+1)
            }
        }>Increment</button>

            <button onClick={()=>{
                isSetCounter(0)
            }
            }>Reset</button>

            <button onClick={()=>{
                isSetCounter(count-1)
            }
            }>Decrement</button>
        </div>
    )
}