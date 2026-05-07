import { Routes,Route, Link } from "react-router-dom"
import { Home } from "./Components/home"
import { Profile } from "./Components/profile"
import { NavBar } from "./Components/NavBar"
import { Demo } from "./Components/Demo"
function  App()
{
  return(
    <>
    <NavBar/>
<Routes>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/profile" element={<Profile/>}></Route>
  <Route path="/demo" element={<Demo/>}></Route>
</Routes>
    </>
  )
}
export default App