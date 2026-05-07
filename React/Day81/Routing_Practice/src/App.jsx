import { NavBar } from "./Components/Navbar"
import { Cart } from "./Components/Cart"
import { Route,Routes} from 'react-router-dom'
import { Product } from "./Components/Product"
import {useState,createContext} from 'react'

export const CartContext=createContext()

function App()
{
  const [cart,setCart]=useState([])
  return(
    <>
    <CartContext.Provider value={{cart,setCart}}>
    <NavBar/>
<Routes>
  <Route path="/" element={<Product/>}></Route>
  <Route path="/Product" element={<Product/>}></Route>
  <Route path="/Cart" element={<Cart/>}></Route>
</Routes>
</CartContext.Provider>
    </>
  )
}
export default App