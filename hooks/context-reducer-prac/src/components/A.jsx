import React from 'react'
import { CountContext } from '../App'
export const A = () => {
    const countContext=React.useContext(CountContext);
  return (
    <div>
    A
    <h2>count: {countContext.countState}</h2>
    <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
    <button onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
    <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>    
    </div>
  )
}
