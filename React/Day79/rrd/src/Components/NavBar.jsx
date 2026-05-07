import {NavLink}   from 'react-router-dom'
export function NavBar()
{
    return(
        <nav className='flex bg-black justify-between p-4 text-white'> 
            <h3>LogO</h3>
            <div className='flex gap-2'>
                <NavLink to={"/A"} className={({isActive})=>isActive ? "text-yellow-200" : "text-white"}>Go To A</NavLink>
                <NavLink to={"/B"} className={({isActive})=>isActive ? "text-yellow-200" : "text-white"}>Go To B</NavLink>
                <NavLink to={"/C"} className={({isActive})=>isActive?"text-yellow-200":"text-white"}>Go To C</NavLink>
            </div>
        </nav>
    )
}