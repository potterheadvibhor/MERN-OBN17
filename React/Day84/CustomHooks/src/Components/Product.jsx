
import { useCounter } from "../Hooks/useCounter";

export function Product() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div>
      <h1>{count}</h1>
<div><button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button></div>
      
    </div>
  );
}