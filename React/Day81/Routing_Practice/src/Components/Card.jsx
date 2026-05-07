import { CartContext } from "../App"
import {useContext} from 'react'
export function Card({image,name,id})
{
    
    const {cart,setCart}=useContext(CartContext)
    console.log(cart)
     return (
          <div 
            key={id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >

            {/* Image */}
            <img 
              src={image || "https://plus.unsplash.com/premium_photo-1711987238385-fc2a6736fdb4"}
              alt={name}
              className="w-full h-40 object-cover"
            />

            {/* Name */}
            <h1 className="text-center text-sm font-medium p-2">
              {name}
            </h1>

            <div className="flex justify-center gap-2 p-2">
             <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
               onClick={()=>setCart(prev=> [...prev,id])}
             
                >Add To Cart</button>
            <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Remove from Cart</button>
            </div>
            
          </div> 
  )
}