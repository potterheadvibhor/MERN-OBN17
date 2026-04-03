import { useState } from "react";

export function Container() {
    let[isTitle,setIsTitle]=useState("")

    let[isDescription,setIsDescription]=useState("")
  return (
    <div className="border rounded-lg w-80 mt-40 p-6 bg-[#FFC801] mx-auto shadow-lg">
      
      <div className="flex flex-col gap-4">
        
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">Title</label>
          <input onChange={(e)=>{
            setIsTitle(e.target.value)
        }           
    }
    value={isTitle}
            className="border rounded-md p-2 bg-white"
            id="name"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pass" className="mb-1 font-medium">Description</label>
          <textarea onChange={(e)=>{
            setIsDescription(e.target.value)
        }
    }
    value={isDescription}
            className="border rounded-md p-2 bg-white"
            id="pass"
            type="password"
          />
        </div>

        <button
        onClick={()=>{
            setIsTitle(isTitle)
            setIsEmail(isEmail)
            setIsDescription(isDescription)
            console.log(`Hello i am ${isTitle}, My Email is ${isEmail} and the Password is ${isDescription} `)
           
            setIsTitle("")
            setIsEmail("")
            setIsDescription("")
        }}
          type="button"
          className="bg-orange-500  text-white py-2 rounded-md shadow-md hover:bg-[#A38000]  transition"
        >
          Add
        </button>

      </div>
    </div>
  );
}