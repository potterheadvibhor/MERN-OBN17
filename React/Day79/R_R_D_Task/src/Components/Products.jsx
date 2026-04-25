import { useEffect, useState } from "react"
import { Card } from "./Card";

export function Products()
{   
    let[prodData,setprodData]=useState([])
    useEffect(()=>
        {
        async function getData()
        {
      const res = await fetch("https://dummyjson.com/products")
      const data= await res.json()
      setprodData(data.products)
        }
        getData()
    },[])
    return(
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                {prodData.map((item)=>{
                    return(<Card name={item.title} image={item.thumbnail} key={item.id}/>)
                })
                }
            </div>
        )
}