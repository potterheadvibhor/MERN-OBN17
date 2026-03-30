import { useState } from "react"

export function Navbar()       
{
        let[color,isSetColor]=useState(true)
    return (
        <div className="flex justify-between bg-[#FFC801] text-white p-[15px]">
            <h1 className="text-black Bold text-3xl">LoGo</h1>
            <div className="flex gap-8 text-black">
                 <button
                 onClick={()=>{
               isSetColor(!color)
           }}
           
          type="button"
          className="bg-darkblue-500  border p-2 text-White py-2 rounded-md shadow-md hover:bg-[#A38000]  transition">
            {color?"Dark":"Light"}
        </button>
         
                {/* <VisiblityButton setShowCounter={setShowCounter}/> */}
            </div>
        </div>
    )
}