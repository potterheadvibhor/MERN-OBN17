import { Child } from "./components/Child"
import { Container1 } from "./components/Container1"
import { Container2 } from "./components/Container2"
import { Counter } from "./components/Counter"
import { GrandParent } from "./components/GrandParent"
import { Hero } from "./components/Hero"
import { LoginForm } from "./components/LoginForm"
import { NavBar } from "./components/NavBar"
import { Parent } from "./components/Parent"
import { useState } from "react"


function App()
{
  // console.log("App Called")
        let[number,isSetNumber]=useState(0)
        let[isDark,isSetDarkMode]=useState(false)
        let[isTransfer,isSetTransfer]=useState("")
  return(
    <div className="flex">
      <Container1  isSetTransfer={isSetTransfer}/>
      <Container2  isTransfer={isTransfer}/>
    </div>
    //  <div>
    //  <NavBar isSetDarkMode={isSetDarkMode}/>
    //  <Hero   isDark={isDark}/>
    //  </div>






















    //   // <div >
    // //   <LoginForm/>
    // // </div>
    // <>
    // {/* <button onClick={()=>{
    //         isSetNumber(number+1)
    //     }}
    //    className="bg-orange-500"> Increase App Count</button>
    // <GrandParent/>
    // {/* <Parent/>
    // <Child/> */}
    //  {/* <Counter/> */}
    // </>
    
  )
}
export default App