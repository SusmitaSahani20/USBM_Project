/* eslint-disable no-unused-vars */
import React from 'react';
import Counter from './Counter';
import { CounterProvider } from './CounterContext';
import './App.css';

function App() {
  return (
    <CounterProvider>
      
      <Counter />
      
    </CounterProvider>
  );
}

export default App;
