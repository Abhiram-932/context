import React from 'react';
import Test2 from './Test2';
import { CounterContext, NameContext } from './context';

export default class Test1 extends React.Component {
  incrementFromTest1 = () => {
    console.log('incrementFromTest1');
    this.context.increment();
  };
  static contextType = CounterContext;

  render() {
    return (
      <NameContext.Consumer>
        {nameContext => {
          return (
            <>
              <h1>Test 1</h1>
              
              <p>Name - {nameContext.name}</p>
              <p>Counter - {this.context.count}</p>
              <button onClick={this.incrementFromTest1}>
                Increment - Test1
              </button>
              <button onClick={this.context.decrement}>
                Decrement - Test1
              </button>
              <button onClick={this.context.reset}>Reset - Test1</button>
              <Test2 />
            </>
          );
        }}
      </NameContext.Consumer>
    );
  }
}
