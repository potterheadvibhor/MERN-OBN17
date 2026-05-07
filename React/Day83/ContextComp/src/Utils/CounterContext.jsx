import { createContext, useContext, useState} from 'react'
export  const CounterContext=createContext()

export function CounterContextProvider({children})
{
    const [count,setCount]=useState(0)
      return(
    <CounterContext.Provider value={{count,setCount}}>
        {children}
    </CounterContext.Provider>
      )
}

// creating a custom hook
export function useCounterContext()
{
    return useContext(CounterContext)
}