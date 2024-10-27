import React from 'react'
import { CounterContextCreation } from '../App';

const CounterContext = () => {
    // consuming the context value
    const {contextCounter, contextIncrementHandler, contextDecrementHandler} = React.useContext(CounterContextCreation);
  return (
    <>
    <h2>CounterContext : {contextCounter}</h2>
    <button data-testid="context-increment" onClick={() => contextIncrementHandler()}>Increment</button>
    <button data-testid="context-decrement" onClick={() => contextDecrementHandler()}>Decrement</button>
    </>
  )
}

export default CounterContext