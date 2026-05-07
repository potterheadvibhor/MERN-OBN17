import { Route, Routes } from "react-router-dom"
import { Home } from "./Compnents/Home"
import { Login } from "./Compnents/Login"
import { Profile } from "./Compnents/Profile"

function App()
{
  return(
    <>
   <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/profile" element={<Profile/>}></Route>
   </Routes>
      </>
  )
}

export default App