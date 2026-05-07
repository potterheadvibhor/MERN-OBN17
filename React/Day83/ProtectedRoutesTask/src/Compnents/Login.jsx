import { useAuthUser } from "../Utils/AuthContextApi"
import { useNavigate } from "react-router-dom"

export function Login() {

    const {userdata,setUserData}=useAuthUser()
const navigate=useNavigate()
    return (

        <div className="flex justify-center items-center h-screen bg-gray-100">

            <div className="border p-6 rounded-lg shadow-lg bg-white w-80">

                <h1 className="text-2xl font-bold text-center mb-5">
                    Login
                </h1>

                <div className="flex flex-col gap-4">

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">
                            Username
                        </label>

                        <input
                        onChange={(e)=> setUserData({...userdata,name:e.target.value})}
                            type="text"
                            placeholder="Enter username"
                            className="border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">
                            Password
                        </label>

                        <input
                        onChange={(e)=> setUserData({...userdata,password:e.target.value})}
                            type="password"
                            placeholder="Enter password"
                            className="border rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <button
                    onClick={()=>{ if(userdata.name==="hi" && userdata.password==="hi")
                    {
                        navigate("/home")
                    }
                    else{
                        navigate("/")
                    }
                    }}
                 className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Login
                    </button>

                </div>

            </div>

        </div>
    )
}