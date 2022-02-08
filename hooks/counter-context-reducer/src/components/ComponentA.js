import React from 'react';
import { CountContext } from '../App';

function ComponentA() {
    const countContext =React.useContext(CountContext);
    return <div>
        Component A   
        <h2>Count : {countContext.countState}</h2>
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countDispatch('decremnet')}>Decrement</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>;
}

export default ComponentA;
