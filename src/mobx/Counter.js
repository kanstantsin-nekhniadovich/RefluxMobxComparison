import { observable, action } from 'mobx';

export class Counter {
  @observable counter = 0;

  @action
  incrementCounter() {
    this.counter++;
  }

  @action
  decrementCounter() {
    this.counter--;
  }

  @action
  setCounter(value) {
    this.counter = value;
  }
}
