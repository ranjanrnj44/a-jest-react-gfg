import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './CounterSlice';


const CounterComponent = () => {
    // selector
    const counterValue = useSelector(store => store?.counter?.count);
    const dispatch = useDispatch();

  return (
    <>
    <h1>RTK counter component!</h1>
    <h3> count is : {counterValue}</h3>
    <button data-testid="redux-increment" onClick={() => dispatch(increment())}>Increment</button>
    <button data-testid="redux-decrement" onClick={() => dispatch(decrement())}>Decrement</button>
    <button data-testid="redux-incrementBy" onClick={() => dispatch(incrementByAmount(3))}>IncrementBy</button>
    </>
  )
}

export default CounterComponent