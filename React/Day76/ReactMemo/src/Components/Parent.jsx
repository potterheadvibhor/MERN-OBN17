import React from "react"
import Child from "./Child"

function Parent({count})
{
      console.log("Parent rendered")

  return(
    <>
    <h1>Parent</h1>
    <Child/>
    </>
  )
}

export default React.memo(Parent)