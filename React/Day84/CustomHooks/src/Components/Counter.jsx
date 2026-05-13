import { useCounter } from "../Hooks/useCounter"
export function Counter()
{
    const {increment,decrement,reset,count}=useCounter()
     return (
        <div className="h-screen flex flex-col items-center justify-center gap-4">
      
      <h1 className="text-4xl font-bold">
        {count}
      </h1>

      <button
        onClick={increment}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Increment
      </button>

      <button
        onClick={reset}
        className="bg-gray-500 text-white px-4 py-2 rounded"
      >
        Reset
      </button>

      <button
        onClick={decrement}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Decrement{window.innerWidth}
      </button>

    </div>
     )
}