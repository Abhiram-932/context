import React from 'react';
import Test3 from './Test3';
import { CounterContext, NameContext } from './context';

export default function Test2() {
  const counterContext = React.useContext(CounterContext);
  const nameContext = React.useContext(NameContext);

  const incrementFromTest2 = () => {
    console.log('incrementFromTest2');
    counterContext.increment();
  };

  return (
    <>
      <h1>Test 2</h1>
      <p>Name - {nameContext.name}</p>
      <p>Counter - {counterContext.count}</p>
      <button onClick={incrementFromTest2}>Increment - Test2</button>
      <button onClick={counterContext.decrement}>Decrement - Test2</button>
      <button onClick={counterContext.reset}>Reset - Test2</button>
      <NameContext.Provider value={{ name: 'Test' }}>
        <Test3 />
      </NameContext.Provider>
    </>
  );
}
