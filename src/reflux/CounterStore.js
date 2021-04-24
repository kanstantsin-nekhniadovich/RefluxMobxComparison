import { Store } from 'reflux';

import { incrementCounter, decrementCounter, setCounter } from './actions';

export class CouterStore extends Store {
  constructor() {
    super();
    this.listenTo(incrementCounter, this.onIncrementCounter);
    this.listenTo(decrementCounter, this.onDecrementCounter);
    this.listenTo(setCounter, this.onSetCounter);
  }

  state = {
    counter: 0,
  }

  onIncrementCounter() {
    this.setState({ counter: this.state.counter + 1 });
  }

  onDecrementCounter() {
    this.setState({ counter: this.state.counter - 1 });
  }

  onSetCounter(value) {
    this.setState({ counter: value });
  }
}
