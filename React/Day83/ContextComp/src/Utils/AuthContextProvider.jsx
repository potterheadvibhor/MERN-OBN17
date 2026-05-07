import { createContext, useContext } from "react"
const authContex=createContext()
export function AuthContextProvider({children})
{
   return(
    <authContex.Provider value={"hello"}>
        {children}
    </authContex.Provider>
    
   )
}



export function useAuthContext()
{
    return useContext(authContex)
}


