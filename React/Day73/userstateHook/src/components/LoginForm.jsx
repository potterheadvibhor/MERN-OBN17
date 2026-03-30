import { useState } from "react";

export function LoginForm() {
    let[isName,setIsName]=useState("")
    let[isEmail,setIsEmail]=useState("")
    let[isPassword,setIsPassword]=useState("")
  return (
    <div className="border rounded-lg w-80 mt-40 p-6 bg-[#FFC801] mx-auto shadow-lg">
      
      <div className="flex flex-col gap-4">
        
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium">Name</label>
          <input onChange={(e)=>{
            setIsName(e.target.value)
        }
    }
    value={isName}
            className="border rounded-md p-2 bg-white"
            id="name"
            type="text"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="gmail" className="mb-1 font-medium">Email</label>
          <input onChange={(e)=>{
             setIsEmail(e.target.value)
        }
    }
    value={isEmail}
            className="border rounded-md p-2 bg-white"
            id="gmail"
            type="email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="pass" className="mb-1 font-medium">Password</label>
          <input onChange={(e)=>{
            setIsPassword(e.target.value)
        }
    }
    value={isPassword}
            className="border rounded-md p-2 bg-white"
            id="pass"
            type="password"
          />
        </div>

        <button
        onClick={()=>{
            setIsName(isName)
            setIsEmail(isEmail)
            setIsPassword(isPassword)
            console.log(`Hello i am ${isName}, My Email is ${isEmail} and the Password is ${isPassword} `)
           
            setIsName("")
            setIsEmail("")
            setIsPassword("")
        }}
          type="button"
          className="bg-orange-500  text-white py-2 rounded-md shadow-md hover:bg-[#A38000]  transition"
        >
          Login
        </button>

      </div>
    </div>
  );
}