import {NavLink} from 'react-router-dom'
import { Product } from './Product'
import { CartContext } from "../App"
import {useContext} from 'react'
export function NavBar() {
    const {cart}=useContext(CartContext)
    const TotalProduct= cart.reduce((sum,currentvalue)=>sum+currentvalue.quantity,0)
    return (
        <div className="flex justify-between items-center px-6 py-3 bg-gray-800 text-gray-100 shadow-md">
            
           
            <h1 className="text-lg font-semibold">LearningContextApi</h1>

          
            <div className="flex gap-6">
                <NavLink to={"/Product"} className={({isActive})=> isActive? "text-yellow-200":""}>Product</NavLink>
                <NavLink to={"/Cart"} className={({isActive})=> isActive? "text-yellow-200":""}>Cart🛒{TotalProduct}</NavLink>
                
            </div>

        </div>
    )
}