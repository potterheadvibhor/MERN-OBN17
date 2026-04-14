import { useState } from "react";

export function MainContainer({darkMode}) {

 let[task,setTask]= useState({title:"",description:""})

 
 let handleChange=(e)=>
 {
  let {name,value}=e.target;

  setTask((prev)=>({
     ...prev,
     [name]:value
  }))

 }
 
  return (
    <div className={"flex-grow flex justify-between " + (darkMode?"bg-gray-700 text-white":"bg-[#FFF7CD]")}>
      
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className={"flex flex-col gap-3 p-6 rounded-lg  w-[300px] " + (darkMode?"bg-black text-white ":" bg-[#FDC3A1]")}>
          
          <label className={"font-semibold" + (darkMode?" text-white ":" text-black")} htmlFor="title"><h1>Title</h1></label>
          <input
          name="title"
          value={task.title}
          onChange={handleChange}
            className={"bg-white p-2 rounded-lg w-full outline-none" + (darkMode?" text-black ":" text-black")}
            type="text"
            placeholder="Enter Title"
            id="title"
          />

          <label className={"font-semibold" + (darkMode?" text-white ":" text-black")} htmlFor="description">Description</label>
          <textarea
           name="description"
          value={task.description}
          onChange={handleChange}
            className={"bg-white p-2 rounded-lg w-full outline-none" +  (darkMode?" text-black ":" text-black")}
            placeholder="Description"
            id="description"
          ></textarea>
          <button 
          onClick={()=>{
            console.log(task)
                     
          }}
           className="rounded-lg bg-[#F57799] font-semibold hover:bg-[#FB9B8F]"
           type="submit"
           >
            Add To List
            </button>

        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1  flex items-center justify-center">
              <div className={"font-semibold flex flex-col gap-3 p-6 rounded-lg  w-[400px] " + (darkMode?"bg-black text-white ":" bg-[#FDC3A1]")}>
                
</div>
      </div>

    </div>
  );
}