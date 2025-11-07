## Callback
In React, a callback function is a function passed as a prop to a child component — usually to trigger an action or share data back to the parent.
But more importantly, we use the useCallback hook to memoize these functions to prevent unnecessary re-renders.