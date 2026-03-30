import { isValidElement } from "react"
import { useState } from "react"

function LikeButton()
{
    let[like,setIsLike]=useState(true)
    let[count,setIsLikeCount]=useState(0)
   return(
    <div style={{
        border:"2px solid black",
        width:"fit-content",
        height:"fit-content"
        }}>
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt=""></img>
       
    <div>
        <h1>PotterheadVibhor</h1>
       <button
       onClick={()=>{
         setIsLike(!like)
         if(like)
         {
            setIsLikeCount(count+1)
        }
       }}>
        {like?"🤍":"❤️"}</button>
        <span>{count}</span>
    </div>
    </div>

   )
       
}

export default LikeButton