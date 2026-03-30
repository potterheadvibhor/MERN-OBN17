import { useState } from "react";

export function Counter()
{
   let[count,setCount]=useState(0)
   
    return (
       <div className="border rounded-lg p-6 shadow-md w-80 h-60 mx-auto mt-10 bg-[#1877F2]">
          <div className="flex justify-center border rounded-lg p-6 bg-[#90949C] text-3xl" >
              {count}
          </div>
          <div className="flex justify-between p-6">
              <button onClick=
              {
                
                ()=>{
                    
                    setCount(count+1)
                    
                    }
            }
              className=" border rounded-lg shadow-md w-15 text-black text-lg rounded-xl p-2 bg-[#90949C]" type="button">+</button>
              <button onClick=
              {
                ()=>{
                    setCount(0)
                    }
            }
              className=" border rounded-lg shadow-md w-15 text-black text-lg rounded-xl p-2 bg-[#90949C]" type="button">Reset</button>
              <button onClick=
              {
                ()=>{
                    if(count===0) 
                        {
                            return 
                        } 
                    setCount(count-1)
                    }
                }
              className=" border rounded-lg shadow-md w-15 text-black text-lg rounded-xl p-2 bg-[#90949C]" type="button">-</button>   
          </div>
       </div>
    )
}