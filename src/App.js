import { createContext, useState } from 'react';
import './App.css';
import Button from './components/Button';
import TestElements from './components/TestElements';
import CounterComponent from './components/featureCounter/CounterComponent';
import NoCounterContext from './components/NoCounterContext';
import CounterContext from './components/CounterContext';

// context
export const CounterContextCreation = createContext();

function App() {
  // STATE :: initial state
  const [toggle, setToggle] = useState(false);
  // action :: handleToggle
  const handleToggle = () => setToggle(prev => !prev);
  // counter state
  const [counter, setCounter] = useState(0);
  // context counter state
  const [contextCounter, setContextCounter] = useState(0);
  
  // non context contextIncrementHandler, contextDecrementHandler
  const incrementHandler = () => setCounter(prev => prev + 1);
  const decrementHandler = () => setCounter(prev => prev - 1);
  
  // contextIncrementHandler, contextDecrementHandler
  const contextIncrementHandler = () => setContextCounter(prev => prev + 1);
  const contextDecrementHandler = () => setContextCounter(prev => prev - 1);

  // context creation
  return (
    <div>
      <h1>Hello World!</h1>
      <TestElements />
      <br />
      <Button toggle={toggle} setToggle={handleToggle} />
      <br />
      <CounterComponent />
      <br />
      <NoCounterContext counter={counter} incrementHandler={incrementHandler} decrementHandler={decrementHandler} />
      <br />
      <CounterContextCreation.Provider value={{contextCounter, contextIncrementHandler, contextDecrementHandler}}>
      <CounterContext />
      </CounterContextCreation.Provider>
    </div>
  );
}

export default App;
