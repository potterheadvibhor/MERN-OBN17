import { useState } from "react";

export function Counter()
{
    let[Count,setCount]=useState(0)
    return(
        <>
        <h1>{Count}</h1>
        <button style={{
            backgroundColor:"red"
        }}onClick={()=>
            { 
                  setCount(prev=>prev+1);
                  setCount(prev=>prev+1)
                }
                  }>
                    Increment</button>
        <button style={{
            backgroundColor:"blue"
        }} onClick={()=>{ 
                  setCount(prev=>prev+1);
                  setCount(prev=>prev+1)
                }
                  }>
                    Decrement</button>
        <button></button>
        </>
    )
}


