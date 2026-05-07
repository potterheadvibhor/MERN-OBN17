import { NavBar } from "./NavBar";
import {useAuthUser}  from "AuthContextApi"
export function Home()
{
    return(
        <div >
            <NavBar/>
            <h1>home</h1>
        </div>
    )
}