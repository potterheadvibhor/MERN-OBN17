import { useState } from "react"

export function Visiblecard({name,age})
{
    let[isShow,setIsShow]=useState(true)
    return(
<div >
    <button className="block border p-2 w-20 h-15 mx-auto mt-15 bg-[grey]" onClick={
        ()=>{
            setIsShow(!isShow)

    }}
    type="button">
        {isShow ? "Hide":"Show"}   {/* //conditional rendering */}
    </button>
       {isShow && <div className="border p-2 w-60 h-70 mx-auto mt-70 bg-[red]"></div>}   {/* {sortCircuiting} */}
        </div>
    )
}