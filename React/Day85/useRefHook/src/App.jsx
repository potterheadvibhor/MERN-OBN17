import { useState,useRef,useEffect } from "react";
import { ImageUpload } from "./Components/imageUplaod";

function App()
{
  let a=0;
  let[count,setCount]=useState(0)
  const countRef=useRef(0)
 



  
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
   {/* <ImageUpload/> */}
    </div>
  )
}

export default App








