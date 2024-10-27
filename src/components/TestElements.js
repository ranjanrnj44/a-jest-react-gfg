import React from 'react'

const TestElements = () => {
 const [counter, setCounter] = React.useState(0)

 // action :: handleDelay
 const handleDelay = () => {
    setTimeout(() =>{
        setCounter(prev => prev-1);
    }, 2000);
 };

 return (
  <>
    <h1 data-testid="counter">{ counter }</h1>
    <button data-testid="button-up" onClick={() => setCounter(counter + 1)}>Increment</button>
    <button disabled data-testid="button-disabled" onClick={() => setCounter(counter - 1)}>Disabled</button>
    <button data-testid="button-down" onClick={handleDelay}>Decrement</button>
 </>
    )
  }

export default TestElements