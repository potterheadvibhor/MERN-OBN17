import { useState } from "react";

export function Card1() {
  
  return (
    <div className="border rounded-lg w-80 h-70 mt-40 p-6 bg-[#FFC801] mx-auto shadow-lg">
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">Title</label>
          <input onChange={(e)=>{
            
        }
    }
            className="border rounded-md p-2 bg-white"
            id="name"
            type="text"
          />
        </div>

    

        <div className="flex flex-col">
          <label htmlFor="text" className="mb-1 font-medium">Description</label>
          <textarea onChange={(e)=>{
        }
    }
            className="border rounded-md p-2 bg-white"
            id="pass"
            type="text"
          />
        </div>

        <button
        
          type="button"
          className="bg-orange-500  text-white py-2 rounded-md shadow-md hover:bg-[#A38000]  transition"
        >
          Add
        </button>

      </div>
    </div>
  );
}