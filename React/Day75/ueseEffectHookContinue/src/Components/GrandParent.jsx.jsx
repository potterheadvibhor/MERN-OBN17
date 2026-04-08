import { useEffect } from "react"
import { Parent } from "./Parent"

export function GrandParent()
{
    useEffect(()=>{
        console.log("UE GranParent")
    },[])
    return(
    <div >
    <h1>GrandParent</h1>
    <Parent/>
    </div>)
}