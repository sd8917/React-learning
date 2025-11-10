import React from 'react'

const MemoizedChild = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>
})


function Parent(){
    const [count, setCount] = React.useState(0);
    const handleClick = React.useCallback(() => {
        console.log('Button clicked');
    }, []);
    return (
        <div>
            <MemoizedChild onClick={handleClick} />
        </div>
    );  
}

export default Parent;