import { useState,useEffect } from "react";

export function MainContainer({darkMode}) {

 let[todos,setTodos]= useState([])
 let[title,setTitle]=useState("")
 let[desc,setDesc]=useState("")


useEffect(()=>{console.log(todos)},[todos])
 

 
  return (
    <div className={"grow flex justify-between h-screen " + (darkMode?"bg-gray-700 text-white":"bg-[#FFF7CD]")}>
      
      {/* Left Section */}
      <div className="flex-1 flex items-center justify-center">
        <div className={"flex flex-col gap-3 p-6 rounded-lg  w-75 " + (darkMode?"bg-black text-white ":" bg-[#FDC3A1]")}>
          
          <label className={"font-semibold" + (darkMode?" text-white ":" text-black")} htmlFor="title"><h1>Title</h1></label>
          <input
          
          onChange={(e)=> setTitle((e.target.value).trim())}
            value={title}
            className={"bg-white p-2 rounded-lg w-full outline-none" + (darkMode?" text-black ":" text-black")}
            type="text"
            placeholder="Enter Title"
            id="title"
          />

          <label className={"font-semibold" + (darkMode?" text-white ":" text-black")} htmlFor="description">Description</label>
          <textarea
         
          onChange={(e)=> setDesc((e.target.value).trim())}
           value={desc}
            className={"bg-white p-2 rounded-lg w-full outline-none" +  (darkMode?" text-black ":" text-black")}
            placeholder="Description"
            id="description"
          ></textarea>
          <button 
          onClick={()=>{
            if(title.length)
            {
            setTodos((prev)=>[...prev,{title,desc}])
            setTitle("")
            setDesc("")
            }
            else{
              alert("please enter Title")
            }
            
          
                     
          }}
           className="rounded-lg  font-semibold hover:bg-[#FB9B8F]"
           type="submit"
           >
            Add To List
            </button>

        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col gap-2 p-3  items-center overflow-y-scroll ">
        {todos.map((todo,index)=>{
                 return(<div key={index} className={" flex  flex-col gap-2 p-6 rounded-lg  w-[400px] " + (darkMode?"bg-black text-white ":" bg-[#FDC3A1]")}>
                <h1 className="font-extrabold">Title</h1>
                <h2 className="">{todo.title}</h2>
                <h1 className="font-extrabold">Description</h1>
                <h2>{todo.desc}</h2>
                <button  className="rounded-lg  font-semibold hover:bg-[#FB9B8F]"
                onClick={()=>{
                   const filteredTodos= todos.filter((obj,idx)=>{
   return index != idx
                   })
                   setTodos(filteredTodos)
                }}
                >Delete</button>

</div>)
        })}
              
      </div>

    </div>
  );
}