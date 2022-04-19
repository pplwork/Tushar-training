import React from 'react'
import { C } from './C'
import { CountContext } from '../App'
export const B = () => {
    const countContext=React.useContext(CountContext)
    return (
        <div>
            B
            <h2>count: {countContext.countState}</h2>
            <C />
        </div>
    )
}
