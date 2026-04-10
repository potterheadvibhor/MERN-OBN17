import { useState } from "react"
import Parent from "./Components/Parent"

 function App()
{
  console.log("App rendered")
  let[count,setCount]=useState(0)
  return(
    <>
    <h1>App</h1>
    <button onClick={()=>{ setCount(count+1)}}>{count}</button>
    <Parent count={count}/>
    </>
  )
}

export default App