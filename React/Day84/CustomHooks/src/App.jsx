import { Harry } from "./Components/Harry"
import { Users } from "./Components/Users"
import { Counter } from "./Components/Counter"
import { NavBar } from "./Components/NavBar"
import {Route,Routes} from "react-router-dom"

function App()
{
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/harry" element={<Harry/>}></Route>
      <Route path="/users" element={<Users/>}></Route>
      <Route path="/counter" element={<Counter/>}></Route>
    </Routes>
    </>
  )
}

export default App