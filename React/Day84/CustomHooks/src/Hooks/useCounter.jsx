import {useState} from "react"
export function useCounter()
{
    const [count,setCount]=useState(0)
    
    const increment =()=>{ setCount(prev =>prev+1)}
    const decrement =()=>{ setCount(prev =>prev-1)}
    const reset =()=>{ setCount(prev =>prev =0)}

    return {increment,decrement,reset,count}
}