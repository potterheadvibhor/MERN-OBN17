import React, { useState } from "react";

const Child = React.memo(({ text }) => {
  console.log("Child rendered");
  return <h2>{text}</h2>;
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <Child text="Hello" />
    </div>
  );
}
  

