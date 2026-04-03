import { useState } from "react"
import { Counter } from "./Components/Counter"

 function App()
{
  let[view,isSetView]=useState(true)
  return(
    <>
    {view ? <Counter/> : ""}
    <button onClick={()=>{
      isSetView(!view)
    }}>Toggle</button>
    </>
  )
}

export default App