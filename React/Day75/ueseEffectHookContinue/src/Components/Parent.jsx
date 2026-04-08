import { Child } from "./Child"
import { useEffect } from "react"
 
export function Parent()
{
      useEffect(()=>{
            console.log("UE Parent")
        },[])
    return(
    <div >
    <h1>Parent</h1>
    <Child/>
    </div>)
}