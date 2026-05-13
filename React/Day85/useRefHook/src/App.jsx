import { useState,useRef,useEffect } from "react";
import { ImageUpload } from "./Components/imageUplaod";

function App()
{
  let a=0;
  let[count,setCount]=useState(0)
  let[text,setText]=useState("")
  const countRef=useRef(0)
  const myRef=useRef(0)
  const ipRef=useRef(0)
 

  useEffect(()=>{
    myRef.current++
  })
  
  useEffect(()=>{
    ipRef.current.focus()
  },[])
  return (
    <div>
      <div>
      <h1>Count 1:{a}</h1>
    </div>
    <div>
      <button onClick={()=>{ a=a+1 
        console.log(a)}}>Increment 1</button>
    </div>

      <div>
      <h1>Count 2:{count}</h1>
    </div>                                                
    <div>
      <button onClick={()=>{ setCount(count+1)}}>Increment 2 </button>
    </div>

      <div>
      <h1>Count 3:{countRef.current}</h1>
    </div>
    <div>
      <button 
      onClick={()=>{ 
        countRef.current=countRef.current+1
        }}
        >Increment 3 
        </button>
    </div>
   <ImageUpload/>
   <input ref={ipRef} onChange={(e)=>  setText(e.target.value)} type="text"></input>
   <h1>render count {myRef.current}</h1>
   <img 
   onClick={()=> ipRef.current.click()}
   style={{height:"200px",width:"200px",borderRadius:"50%",cursor:"pointer"}}
    src="https://images.unsplash.com/photo-1773332585698-cba3c91b73e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"></img>
   <input ref={ipRef} style={{display:"none"}} type="file"></input>
    </div>
  )
}

export default App








