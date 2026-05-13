import {useState,useEffect} from "react"
export function useFetchData(url)
{
    const [data,setData]=useState([])
    useEffect(()=>{
        async function getData() {
const res=await fetch(url)
const apidata=await res.json()
setData(apidata)   
        }
        getData()
    },[])
    return {data}
}