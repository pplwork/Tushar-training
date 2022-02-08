import React from 'react';
import { CountContext } from '../App';

function ComponentC() {
    const countContext=React.useContext(CountContext);
    
    return <div>
        Component C
        <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countDispatch('decremnet')}>Decrement</button>
        <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>;
}

export default ComponentC;