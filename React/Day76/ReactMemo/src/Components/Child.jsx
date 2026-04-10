import React from "react"
function Child()
{
      console.log("Child rendered")

  return(
    <>
    <h1>Child</h1>
   
    </>
  )
}

export default React.memo(Child)