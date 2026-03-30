import { useState } from "react"

function PasswordField()
{
    let[showPassword,setShowPassword]=useState(true)
    return(
        <div className="grid gap-2 p-3">
         <label>Password</label>
       <input type= {(showPassword? "password":"text" )} className={'border rounded p-3"  placeholder="Enter Password'  }  ></input>
       <button 
       onClick={()=>{
        setShowPassword(!showPassword)
        console.log()
       }}
       className="border">{showPassword? "Show":"Hide"}</button>
        </div>
    )
}

export default PasswordField