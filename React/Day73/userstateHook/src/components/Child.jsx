import { useState } from "react"

export function Child()
{
    console.log("Child Called")
        let[number,isSetNumber]=useState(0)

    return(
       <div>
        <button onClick={()=>{
            isSetNumber(number+1)
        }}
       className="bg-red-500">
        Increase Child Count
        </button>
        </div>
    )
}