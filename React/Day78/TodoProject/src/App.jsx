import { useState } from "react"
import { NavBar } from "./Components/NavBar"
import { MainContainer } from "./Components/MainContainer"

function App()
{
        let[darkMode,setDarkMode]=useState(false)

  return(
    <>
    <div className="flex flex-col h-screen">
  <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
<MainContainer darkMode={darkMode} /> 
    </div>
     
    </>
  )
}

export default App