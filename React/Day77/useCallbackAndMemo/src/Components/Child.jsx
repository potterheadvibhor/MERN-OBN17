import { useMemo, useState } from "react"
import React from "react"

function Child()
{

    console.log("Child Rendered")
  let[Count,setCount]=useState(0)
  let[num,setNum]=useState("")

  function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function nthPrime(n) {
  let count = 0;
  let num = 1;

  while (count < n) {
    num++;

    if (isPrime(num)) {
      count++;
    }
  }

  return num;
}

// Example
const ans=useMemo(()=>{
    console.log("UseMemo Runs")
    return (nthPrime(Number(num)))
},[num])

   return(
     <div>
        <div>
            <input onChange={(e)=> setNum(e.target.value)}
            type="number" 
            placeholder="enter number"
            ></input>
            <h1>We got : {ans>1? ans:""}</h1>
        </div>
       <div>
         <h1>Child Counter : {Count}</h1>
       </div>
       <div>
         <button onClick={()=> setCount(prev=>prev+1)}>Increment</button>
         <button onClick={()=> setCount(prev=>prev=0)}>Reset</button>
         <button onClick={()=> setCount(prev=>prev-1)}>Decrement</button>
       </div>
       
     </div>
   )
}

export default React.memo(Child)