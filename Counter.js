import React from 'react';
import Test1 from './Test1';
import { CounterContext } from './context';

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => this.setState({ count: this.state.count + 1 });
  decrement = () => this.setState({ count: this.state.count - 1 });
  reset = () => this.setState({ count: 0 });

  render() {
    return (
      <CounterContext.Provider
        value={{
          count: this.state.count,
          increment: this.increment,
          decrement: this.decrement,
          reset: this.reset
        }}
      >
        <h1>Counter Application</h1>
        <p>Counter - {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        <Test1 />
      </CounterContext.Provider>
    );
  }
}
