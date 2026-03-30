import { Navbar } from "./components/NavBar"
import {Card1} from "./components/Card1"
import {Card2} from "./components/Card2"

function App()
{
 return (
  <>
  <Navbar/>
  <div className="flex items-center gap-[20px]">
  <Card1/>
  <Card2/>
  </div>
  
  </>
  
 )
}

export default App    