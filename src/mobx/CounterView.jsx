import React from 'react';
import { observer, inject } from 'mobx-react';

import { withStore } from './StoreProvider';

@withStore
@observer
class CounterView extends React.Component {
  constructor() {
    super();
    this.decrementCounter = this.decrementCounter.bind(this);
    this.incrementCounter = this.incrementCounter.bind(this);
    this.setRandomCounterValue = this.setRandomCounterValue.bind(this);
  }

  componentDidMount() {
    console.log(this.props.store);
  }

  decrementCounter() {
    this.props.store.decrementCounter();
  }

  incrementCounter() {
    this.props.store.incrementCounter();
  }

  setRandomCounterValue() {
    this.props.store.setCounter(Math.floor(10 * Math.random()));
  }

  render() {
    return (
      <div className="counter-container">
        <p>Counter: {this.props.store.counter}</p>
        <div>
          <button onClick={this.decrementCounter}>-</button>
          <button onClick={this.incrementCounter}>+</button>
          <button onClick={this.setRandomCounterValue}>Set counter</button>
        </div>
      </div>
    );
  }
};

export default CounterView;
