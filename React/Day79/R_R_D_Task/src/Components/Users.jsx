import { useEffect, useState } from "react"
import { Card } from "./Card"

export function Users()
{   
    let[userData,setuserData]=useState([])
    useEffect(()=>
        {
        async function getData()
        {
      const res = await fetch("https://jsonplaceholder.typicode.com/users")
      const data= await res.json()
      setuserData(data)
        }
        getData()
    },[])
     return(
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                    {userData.map((item)=>{
                        return(<Card name={item.name} image={item.thumbnail} key={item.id}/>)
                    })
                    }
                </div>
            )
}