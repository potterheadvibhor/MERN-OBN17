import { useEffect } from "react"
import { useState } from "react"

export function NavBar({setProdData,ApiData})
{
    
    let[query,setQuery]=useState("")
    useEffect(()=>
        {
        const filteredProduct=ApiData.filter((item)=>{
        return item.title.toLowerCase().includes(query.toLowerCase())
      })
      setProdData(filteredProduct)
    },[query])

    return(
        <nav style={{
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"space-between",
                      width:"100%",
                      padding: "1rem 5%",
                      background:"#A47251",
                      borderBottom:"1px solid",        
        }}>
            <div style={{
                      fontSize:"2rem",
                      fontWeight:"800",
                      color:"#454040",
                      letterSpacing:"1px"
            }}>
                🔍Products
            </div>
            <ul style={{
                         display:"flex",
                         gap:"2rem"
            }}>
                <li style={{
                             position:"relative",
                             fontSize:"1.05rem",
                             fontWeight:500
                }}>Home</li>
                <li style={{
                             position:"relative",
                             fontSize:"1.05rem",
                             fontWeight:"500"
                }}>Product</li>
                <li style={{
                             position:"relative",
                             fontSize:"1.05rem",
                             fontWeight:500
                }}>Cart</li>
            </ul>
            <div style={{
                          display:"flex"
            }}>
                <input 
                onChange={(e)=>
                    {
                        setQuery((e.target.value).trim())
                    }
                }
                type="text" className="border p-2 rounded" placeholder="Serach Product" />
            </div>
        </nav>
    )
}