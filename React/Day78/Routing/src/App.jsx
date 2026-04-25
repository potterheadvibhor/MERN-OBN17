import { Routes,Route, Link } from "react-router-dom"
import { Home } from "./Components/home"
import { Profile } from "./Components/profile"
import { NavBar } from "./Components/NavBar"
function  App()
{
  return(
    <>
    <NavBar/>
<Routes>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/profile" element={<Profile/>}></Route>
</Routes>
    </>
  )
}
export default App