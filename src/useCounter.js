import { useState } from "react";


const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  return {
    count,
    increment: () => setCount(c => c + 1),
    decrement: () => setCount(c => c - 1),
    reset: () => setCount(initialValue),
  };
};

export default useCounter
