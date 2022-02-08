import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentD from './components/ComponentD';

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decremnet':
      return state - 1;
    case 'reset':
      return initialState;
    default: return state;
  }
}

function App() {
  const [count, dispatchCount] = React.useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{countState:count,countDispatch:dispatchCount}}>
      <div className="App">
        <h1>Count : {count}</h1>
        <ComponentA />
        <ComponentB />
        <ComponentD />
      </div>
    </CountContext.Provider>
  );
}

export default App;
