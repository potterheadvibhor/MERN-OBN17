import { useEffect, useState } from "react"
import { NavBar } from "./Components/NavBar"
import { Products } from "./Components/Products"

 function App()
{
  let[ApiData,setApiData]=useState([])
  let[prodData,setProdData]=useState([])

    useEffect(()=>
    {
    async function getData() 
    {
      let res= await fetch("https://dummyjson.com/products")
      let data= await res.json()
      setProdData(data.products)
      setApiData(data.products)
        }
        getData()
    },[])
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar setProdData={setProdData} ApiData={ApiData}/>
      <Products  prodData={prodData} />
    </div>
  )
}


export default App