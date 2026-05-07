import { createContext, useState } from "react";
import { GP } from "./Components/GP";
export const MyContext=createContext()


function App()
{
  const [name]=useState("qwerty")
  const age=34
  return(<>
  <MyContext.Provider value={{name,age}}>
<GP/>
  </MyContext.Provider>
  
  </>)
}

export default App