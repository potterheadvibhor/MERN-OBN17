import Hero from "./components_ans_props/Hero";
import Navbar from "./components_ans_props/Navbar";
import SideBar from "./components_ans_props/SideBar";
import Ad from "./components_ans_props/Ad";
import Introduction from "./components_ans_props/Props";

function App()
{
  return (
    <>
    <Navbar />
    <div style={{display:"flex"}}>
    <SideBar />
    <Hero />
    <Ad />
    </div>
    {/* <Introduction name="Vibhor" age={18}/> */}
    
   
    </>
    
  )
}


export default App