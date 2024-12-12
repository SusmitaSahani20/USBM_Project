/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';
import './Counter.css';

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className="counter-container">
      <div className="counter-display">
        Counter: {state.count}
      </div>
      <div className="counter-buttons">
        <button
          className="counter-button increment"
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          Increment
        </button>
        <button
          className="counter-button decrement"
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          Decrement
        </button>
        <button
          className="counter-button reset"
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
