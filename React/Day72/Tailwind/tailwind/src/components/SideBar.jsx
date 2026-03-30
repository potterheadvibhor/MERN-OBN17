import { useState } from "react"

export function SideBar()
{
    let[isSideBarOpen,setIsSideBarOpen]=useState(false)
    console.log(isSideBarOpen)
    return(
        
        <div 
        onMouseEnter={()=>{
                setIsSideBarOpen(true)
            }}
            onMouseLeave={()=>{
                setIsSideBarOpen(false)
            }}
            className={'border rounded-lg h-full bg-[#90979c]  p-3'+ (isSideBarOpen ? "[w-100]": "[w-9]")}>
            <ul 
        
            className="p-3 grid gap-4 ">
                <li className="p-3 border-b-4 hover:bg-[#1877F2]"><span>☀️</span>{isSideBarOpen && "Vibhor"}</li>
                <li className="p-3 border-b-4 hover:bg-[#1877F2]"><span>🌚</span>{isSideBarOpen && "Samyak"}</li>
                <li className="p-3 border-b-4 hover:bg-[#1877F2]"><span>🔍</span>{isSideBarOpen && "Sanu"}</li>
                <li className="p-3 border-b-4 hover:bg-[#1877F2]"><span>👌</span>{isSideBarOpen && "Drishti"}</li>
            </ul>
        </div>
    )
    
}