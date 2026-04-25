import { useEffect, useState } from "react"
import { Card } from "./Card";


export function Harry()
{
    let[hpData,setHpData]=useState([])
    useEffect(()=>{
        async function getData()
        {
      const res = await fetch("https://hp-api.onrender.com/api/characters/students")
      const data= await res.json()
      setHpData(data)
        }
        getData()
    },[])
    return(
         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {hpData.map((item)=>{
                return(<Card name={item.name} image={item.image} key={item.id}/>)
            })}
        </div>
    )
}