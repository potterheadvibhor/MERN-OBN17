import { useEffect } from "react"

export function Child()
{
      useEffect(()=>{
            console.log("UE Child")
        },[])
    return(
    <div >
    <h1>Child</h1>
    
    </div>)
}