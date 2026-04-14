import { useState } from "react"
import Child from "./Components/Child"

function App()
{
  console.log("App Rendered")
  let[Count,setCount]=useState(0)
  return(
    <div>
      <div>
        <h1>App Counter :{Count}</h1>
      </div>
      <div>
        <button onClick={()=> setCount(prev=>prev+1)}>Increment</button>
        <button onClick={()=> setCount(prev=>prev=0)}>Reset</button>
        <button onClick={()=> setCount(prev=>prev-1)}>Decrement</button>
      </div>
      
      <Child/>
    </div>
  )
}


export default App