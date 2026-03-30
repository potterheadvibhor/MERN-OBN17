import { useState } from "react"

export function DarMode()
{
    let[color,isSetColor]=useState(true)
    return(
        <div className={'w-screen h-screen'+(color ? " ":" bg-[black]")}>
           <button className="border w-20 h-10" type="button" 
           onClick={()=>{
               isSetColor(!color)
           }}>
            {color?"🌚":"🌞"}</button>
        </div>
    )
}