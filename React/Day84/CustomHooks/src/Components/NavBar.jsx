import {NavLink} from "react-router-dom"
export function NavBar()
{
    return(
        <div className="flex justify-between items-center px-6 py-3 bg-gray-800 text-gray-100 shadow-md">
            <div>
                <h1>Logo</h1>
            </div>
            <div className="flex gap-6">
                <NavLink to={"/harry"}  className={({isActive})=> isActive ? "text-yellow-200":"text-white-200"}>Harry</NavLink>
                <NavLink to={"/users"}  className={({isActive})=> isActive ? "text-yellow-200":"text-white-200"}>Users</NavLink>
                <NavLink to={"/counter"}  className={({isActive})=> isActive ? "text-yellow-200":"text-white-200"}>Counter</NavLink>
            </div>
        </div>
    )
}