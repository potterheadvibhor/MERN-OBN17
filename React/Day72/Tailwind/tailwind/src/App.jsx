import { useState } from "react"
import { Counter } from "./components/Counter"
import { Navbar } from "./components/Navbar"
import { SideBar } from "./components/SideBar"
import { Visiblecard } from "./components/Visiblecard"

 function App()
{
      // let[showCounter,setShowCounter]=useState(true)
  return (
//   <div className="">
//     <Navbar setShowCounter={setShowCounter}/>
//     <div className="flex justify-between h-screen ">
//       <SideBar/>
//  {showCounter && <Counter/>}
 
//     </div>

//   </div>

<Visiblecard/>
    
  )
}

export default App