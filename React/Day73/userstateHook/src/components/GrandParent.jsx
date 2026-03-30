import { useState } from "react"
import { Parent } from "./Parent"

export function GrandParent()
{
    console.log("GrandParent Called")
    let[number,isSetNumber]=useState(0)
           
    return(  
        <div>
        <button onClick={()=>{
            isSetNumber(number+1)
        }}
        className="bg-yellow-500">
        Increase GrandParent Count
        </button>
        <Parent/>
        </div>
        
    )
}