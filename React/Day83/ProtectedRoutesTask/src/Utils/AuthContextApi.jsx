import { useState } from "react"
import { useContext,createContext } from "react"

const userContext= createContext()
export function AuthContexProvider({children})
{
    
    let [userdata,setUserData]=useState({
   name: "",
   password: ""
})
    return(
    
        <userContext.Provider value={{userdata,setUserData}}>
{children}
        </userContext.Provider>
        
    )
}



export function useAuthUser()
{
    return useContext(userContext)
}