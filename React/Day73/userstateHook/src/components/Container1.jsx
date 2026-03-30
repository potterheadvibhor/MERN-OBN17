import { useState } from "react";

export function Container1({isSetTransfer}) {
  
  return (
    <div className="border rounded-lg w-80 gap-[20px] mt-40 p-6 bg-[#FFC801] mx-auto shadow-lg">
      
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">Original</label>
          <textarea onChange={(e)=>{
            isSetTransfer(e.target.value)
            
        }
    }
            className="border rounded-md p-2 h-80 bg-white"
            id="name"
            type="text"
          />
        </div>
      </div>
    </div>
  );
}