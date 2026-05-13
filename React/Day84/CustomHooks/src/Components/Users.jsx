import { useFetchData } from "../Hooks/useFetchData"
export function Users()
{
    const {data}=useFetchData("https://jsonplaceholder.typicode.com/users")
    return(
       <div>
        {data.length>0? data.map((item)=> {return <h1>{item.name}</h1>}): ""}
       </div>
    )
}