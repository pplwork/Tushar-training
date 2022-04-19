import './App.css';
import React from 'react';
import { A } from './components/A';
import { B } from './components/B';
import { D } from './components/D';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [count, dispatchCount] = React.useReducer(reducer, initialState);

  return (
    <CountContext.Provider value={{ countState: count, countDispatch: dispatchCount }}>
      <div className="App">
        <h1>COUNT: {count}</h1>
        <A />
        <B />
        <D />
      </div>
    </CountContext.Provider>
  );
}

export default App;
