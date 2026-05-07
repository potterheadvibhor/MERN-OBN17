import { A } from "./Components/A"
import { B } from "./Components/B"
import { C } from "./Components/C"
import { NavBar } from "./Components/NavBar"
import {Routes,Route} from "react-router-dom"
import { User } from "./Components/user"


 function App()
 {
  return(
    <>
    <NavBar/>
    <Routes>
      <Route path="/a" element={<A/>}></Route>
      <Route path="/b" element={<B/>}></Route>
      <Route path="/c" element={<C/>}></Route>
      <Route path="/user/:username" element={<User/>}></Route>
    </Routes>
    
    </>
  )
 }

 export default App