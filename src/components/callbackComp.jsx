import React, { useState, useCallback } from "react";

// const Child = ({ onIncrement }) => {
//   console.log("Child rendered!");
//   return <button onClick={onIncrement}>Increment</button>;
// };
const Child = React.memo(({ onIncrement }) => {
  console.log("Child rendered!");
  return <button onClick={onIncrement}>Increment</button>;
});

function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

//   const increment = () => setCount(count + 1);

    const increment = useCallback(() => {
    setCount((prev) => prev + 1);
     }, []);
     
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <Child onIncrement={increment} />
      <p>Count: {count}</p>
    </div>
  );
}

export default Parent;
