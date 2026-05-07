import { NavBar } from "./Navbar";
import {useEffect,useState} from "react"
import { Card } from "./Card";
import { Loader } from "./Loader";
import { CartContext } from "../App"
import {useContext} from 'react'

export function Product()
{
    const {cart,setCart}=useContext(CartContext)
   const[productData,setProductData]=useState([])
  
    useEffect(()=>{
        async function getData() 
        {
        const res = await fetch('https://dummyjson.com/products')
        const data = await res.json()
            setProductData(data.products)
    
        }
        getData()
    },[])
     if (productData.length === 0) {
       return <Loader />; // ✅ full control, no grid restriction
     }
    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
       { productData.map((item)=>{
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

            <div className="flex justify-center gap-2 p-2">
             <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
               onClick={()=>{
                 const foundProduct=cart.find((cp)=>
                {return cp.id == item.id} )
                if(!foundProduct)
                {
                  setCart(prev=> [...prev,{...item,quantity:1}])
                }
                    else{
                        const filteredArray=cart.filter((fp)=>{
                            return foundProduct.id != fp.id
                        })
                       filteredArray.push({...foundProduct,quantity: foundProduct.quantity+1})
                       setCart(filteredArray)
                    }
                }}
                >Add To Cart</button>

            {/* <button 
            //  onClick={()=>setCart(prev=> prev.filter(item.id !==  ))}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
            >Remove from Cart</button> */}
            </div>
            
          </div> )
       })}
        </div>
    )
}