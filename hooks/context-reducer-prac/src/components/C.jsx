import React from 'react'
import { CountContext } from '../App'
export const C = () => {
    const countContext = React.useContext(CountContext);
    return (
        <div>
            C
            <button onClick={()=>{countContext.countDispatch('increment')}}>Increment</button>
            <button onClick={()=>{countContext.countDispatch('decrement')}}>Decrement</button>
            <button onClick={()=>{countContext.countDispatch('reset')}}>Reset</button>

        </div>
    )
}
