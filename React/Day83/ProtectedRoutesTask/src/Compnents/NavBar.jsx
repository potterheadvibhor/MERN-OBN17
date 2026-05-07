import { NavLink } from "react-router-dom";

export function NavBar()
{
  return(
    <div className="flex justify-between items-center px-6 py-3 bg-gray-800 text-gray-100 shadow-md">
            
           
            <h1 className="text-lg font-semibold">ProtectedRotingTask</h1>

          
            <div className="flex gap-6">
                <NavLink to={"/home"} className={({isActive})=> isActive? "text-yellow-200":""}>Home</NavLink>
                <NavLink to={"/profile"} className={({isActive})=> isActive? "text-yellow-200":""}>Profile</NavLink>
                
            </div>

        </div>
  )
}