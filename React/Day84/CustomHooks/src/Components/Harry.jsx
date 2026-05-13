import { useFetchData } from "../Hooks/useFetchData"
export function Harry()
{
    const {data}=useFetchData("https://hp-api.onrender.com/api/characters")
    return(
       <div>
        {data.length>0? data.map((item)=> {return <h1>{item.name}</h1>}): ""}
       </div>
    )
}