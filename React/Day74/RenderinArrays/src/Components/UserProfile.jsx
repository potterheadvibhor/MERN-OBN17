import { useState } from "react"

export function UserProfile({name,status})
{
  let isVip= status==="vip"
  console.log(isVip)
    return (
            <div className={"border rounded-lg w-full p-6 shadow-lg " + (isVip ? "bg-black text-white":"bg-[#FFC801]") }>
<h1>Name   :{name}</h1>
<h1>Status   :{status}</h1>

            </div>
    )
}