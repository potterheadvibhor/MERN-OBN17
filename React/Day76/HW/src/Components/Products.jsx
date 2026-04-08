import { Card } from "./Card";
import { useEffect, useState } from "react"


export function Products()
{
    let[prodData,setProdData]=useState([])
    useEffect(()=>
    {
        async function getData() {
            let res= await fetch("https://dummyjson.com/products")
let data= await res.json()
setProdData(data.products)
        }
        getData()
    },[])
    return(
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {prodData.map((item)=>{
                return(<Card name={item.title} image={item.thumbnail} id={item.id}/>)
            })
            }
        </div>
    )
    
}