import { Route, Routes } from "react-router-dom"
import { useCounterContext } from "./Utils/CounterContext"
import { Home } from "./Components/Home"
import { Login } from "./Components/login"
import { Landing } from "./Components/Landing"
import { ProtectedRoutes } from "./Utils/ProtectedRoutes"
import { Profile } from "./Components/Profile"
function App()
{
  const {count,setCount}= useCounterContext()
  return(
    <>
    {/* <h1>{count}</h1>
    <button onClick={()=> setCount(prev=> prev+1)}>➕</button>
    <button onClick={()=> setCount(prev=> prev=0)}>®️</button>
    <button onClick={()=> setCount(prev=> prev-1)}>➖</button> */}
    <h1>Appp</h1>
    <Routes>
      <Route path="/" element={<ProtectedRoutes/>}>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
</Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/landing" element={<Landing/>}></Route>
      
    </Routes>
    </>
  )
}

export default App