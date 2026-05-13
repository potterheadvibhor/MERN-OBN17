import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./utils/CounterSlicer"
import { setText } from "./utils/TextSlicer"
function App()
{

   const count=useSelector((store)=>{ return store.Counter})
  const text=useSelector((store)=>{ return store.Text})
  const dispatch=useDispatch()
  return (
    <>
    <div>
       < h1>Count is : {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
    <div>
      <input onChange={(e)=>{
        dispatch(setText(e.target.value))
      }} type="text" ></input>
      <h1>Text is {text}</h1>
    </div>
     
    </>
     
  )
}
export default App