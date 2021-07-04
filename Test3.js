import React from 'react';
import { CounterContext, NameContext } from './context';

export default function Test3() {
  return (
    <CounterContext.Consumer>
      {counterContext => {
        return (
          <NameContext.Consumer>
            {nameContext => {
              return (
                <>
                  <h1>Test 3</h1>
                  <p>Name - context</p>
                  <p>Counter - {counterContext.count}</p>
                  <button onClick={counterContext.increment}>
                    Increment - Test3
                  </button>
                  <button onClick={counterContext.decrement}>
                    Decrement - Test3
                  </button>
                  <button onClick={counterContext.reset}>Reset - Test3</button>
                </>
              );
            }}
          </NameContext.Consumer>
        );
      }}
    </CounterContext.Consumer>
  );
}
