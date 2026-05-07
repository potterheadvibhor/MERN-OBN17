import { NavBar } from "./Navbar";
import {useEffect,useState} from "react"
import { Card } from "./Card";
import { Loader } from "./Loader";
import { CartContext } from "../App"
import {useContext} from 'react'
import { EmptyCart } from "./EmptyCart";

export function Cart()
{
    const {cart,setCart}=useContext(CartContext)
     if (cart.length === 0) {
    return <EmptyCart />; // ✅ full control, no grid restriction
  }

    console.log(cart);
    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
       { cart.map((item)=>{
           return (<div 
            key={item.id}
            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
          >

            {/* Image */}
            <img 
              src={item.thumbnail || "https://plus.unsplash.com/premium_photo-1711987238385-fc2a6736fdb4"}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            {/* Name */}
            <h1 className="text-center text-sm font-medium p-2">
              {item.title}
            </h1>

            <h1 className="text-center text-sm font-medium p-2">
              Quantity = {item.quantity}
            </h1>

            <div className="flex justify-center gap-2 p-2">
            <button 
        onClick={()=>{
                        const filteredArray=cart.filter((fp)=>{
                            return item.id != fp.id
                        })
                       setCart(filteredArray)
                    
                }}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">Remove from Cart</button>
            </div>
            
          </div> )
       })}
        </div>
    )
}