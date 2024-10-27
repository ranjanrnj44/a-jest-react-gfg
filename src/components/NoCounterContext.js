import React from 'react'

const NoCounterContext = ({counter, incrementHandler, decrementHandler}) => {
  return (
    <>
    <h2>No-CounterContext : {counter}</h2>
    <button data-testid="no-context-increment" onClick={() => incrementHandler()}>Increment</button>
    <button data-testid="no-context-decrement" onClick={() => decrementHandler()}>Decrement</button>
    </>
  )
}

export default NoCounterContext