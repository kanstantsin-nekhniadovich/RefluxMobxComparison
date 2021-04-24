import React from 'react';
import { Component } from 'reflux';

import { CouterStore } from './CounterStore';
import * as actions from './actions';

export class Reflux extends Component {
  constructor() {
    super();
    this.store = CouterStore;
  }

  incrementCounter() {
    actions.incrementCounter();
  }

  decrementCounter() {
    actions.decrementCounter();
  }

  setRandomCounterValue() {
    actions.setCounter(Math.floor(10 * Math.random()));
  }

  render() {
    return (
      <>
        <h1>Reflux</h1>
        <div className="counter-container">
          <p>Counter: {this.state.counter}</p>
          <div>
            <button onClick={this.decrementCounter}>-</button>
            <button onClick={this.incrementCounter}>+</button>
            <button onClick={this.setRandomCounterValue}>Set counter</button>
          </div>
        </div>
      </>
    );
  }
};
