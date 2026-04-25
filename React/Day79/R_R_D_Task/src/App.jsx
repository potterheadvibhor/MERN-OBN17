import { Harry } from "./Components/Harry"
import { NavBar } from "./Components/NavBar"
import {Routes,Route} from "react-router-dom"
import { Users } from "./Components/Users"
import { Products } from "./Components/Products"
import { Footer } from "./Components/Footer"

function App()
{
  return(
    <>
    <NavBar/>
    <Routes>
      
      <Route path="/" ></Route>
      <Route path="/harry" element={<Harry/>}></Route>
      <Route path="/user" element={<Users/>}></Route>
      <Route path="/product" element={<Products/>}></Route>
    </Routes>
   <Footer/>
    </>
  )
}

export default App