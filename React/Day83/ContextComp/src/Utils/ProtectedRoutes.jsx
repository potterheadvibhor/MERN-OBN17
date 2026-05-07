import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes()
{
   const [userdata,setUserData]=useState(null)

   useEffect(()=>{
    setTimeout(()=>{
        setUserData({
            name:"Vibhor",
            isCorrect:false
        })
    },2000)
   })

   if(!userdata)
   {
    return <h1>Please Wait.....</h1>
   }

   return userdata.isCorrect ? <Outlet/> :<Navigate to={"/login"}/>
}