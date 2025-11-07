import React from 'react';

function useDebouncedValue(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);
    React.useEffect(() => { 
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };  
    }, [value, delay]);
    return debouncedValue;
}

export default useDebouncedValue;