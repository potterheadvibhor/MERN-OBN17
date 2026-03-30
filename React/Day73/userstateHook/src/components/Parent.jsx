import { useState } from "react"
import { Child } from "./Child"

export function Parent()
{
    console.log("Parent Called")
    let[number,isSetNumber]=useState(0)
    return(
        <div>
        <button onClick={()=>{
            isSetNumber(number+1)
        }}
       className="bg-blue-500">
        Increase Parent Count
        </button>
        <Child/>
        </div>
    )
}