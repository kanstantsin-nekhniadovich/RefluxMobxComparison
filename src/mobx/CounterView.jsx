import React from 'react';
import { observer } from 'mobx-react';

import { useStore } from './StoreProvider';

// use functional component approach
export default observer(() => {
  const { counter } = useStore();

  const decrementCounter = () => {
    counter.decrementCounter();
  }

  const incrementCounter = () => {
    counter.incrementCounter();
  }

  const setRandomCounterValue = () => {
    counter.setCounter(Math.floor(10 * Math.random()));
  }

  return (
    <div className="counter-container">
      <p>Counter: {counter.counter}</p>
      <div>
        <button onClick={decrementCounter}>-</button>
        <button onClick={incrementCounter}>+</button>
        <button onClick={setRandomCounterValue}>Set counter</button>
      </div>
    </div>
  );

});

// use class component approach

// @withStore
// @observer
// class CounterView extends React.Component {
//   constructor() {
//     super();
//     this.decrementCounter = this.decrementCounter.bind(this);
//     this.incrementCounter = this.incrementCounter.bind(this);
//     this.setRandomCounterValue = this.setRandomCounterValue.bind(this);
//   }

//   decrementCounter() {
//     this.props.store.decrementCounter();
//   }

//   incrementCounter() {
//     this.props.store.incrementCounter();
//   }

//   setRandomCounterValue() {
//     this.props.store.setCounter(Math.floor(10 * Math.random()));
//   }

//   render() {
//     return (
//       <div className="counter-container">
//         <p>Counter: {this.props.store.counter}</p>
//         <div>
//           <button onClick={this.decrementCounter}>-</button>
//           <button onClick={this.incrementCounter}>+</button>
//           <button onClick={this.setRandomCounterValue}>Set counter</button>
//         </div>
//       </div>
//     );
//   }
// };

// export default CounterView;
