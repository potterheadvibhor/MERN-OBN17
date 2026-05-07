import { createContext, useState } from "react"
import { Button } from "./Components/Button"
import { Display } from "./Components/Display"

export const MyCountContext=createContext()

function App()
{
  const [count,setCount]=useState(0)
  return(
    <MyCountContext.Provider value={{count,setCount}}>
       <div className="flex justify-between p-4">
       <Display/>
       <Button/>
       </div>
    </MyCountContext.Provider>
   
  )

}

export default App