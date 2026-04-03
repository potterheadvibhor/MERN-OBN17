import { useState } from "react"
import { Container } from "./Components/Container"
import { NavBar } from "./Components/NavBar"

function App()
{
          let[isDark,isSetDarkMode]=useState(false)

  return(
    <>
    
    <NavBar isSetDarkMode={isSetDarkMode}/>
<Container/>    
    </>
  )
}

export default App