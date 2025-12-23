import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);

    const increasement = () => setCount(prev => prev + 1);
    const decreasement = () => setCount(prev => prev - 1);
    const reset = () => setCount(0);

    return (
      <WrappedComponent
        count={count}
        increasement={increasement}
        decreasement={decreasement}
        reset={reset}
        {...props}
      />
    );
  };
};

export default withCounter;
