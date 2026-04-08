import { NavBar } from "./Components/NavBar"
import { Products } from "./Components/Products"

 function App()
{
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <Products/>
    </div>
  )
}


export default App