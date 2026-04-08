import { useEffect, useState } from "react"
import {Card} from "./Card"
import { Loader } from "./Loader"

export function ApiPractice() {
    
  const [hpData, setHpData] = useState([])

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://hp-api.onrender.com/api/characters/students")
      const data = await res.json()
      setHpData(data)
    }
    getData()
  }, [])

  return(
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
    {hpData.length >0 ? hpData.map((item) => {
        return (
          <Card image={item.image} name={item.name} id={item.id}/>
        )}): <Loader/>}
        </div>
  )
}