import React from 'react';
import ComponentC from './ComponentC';
import { CountContext } from '../App';


function ComponentB() {
    const countContext = React.useContext(CountContext);

    return <div>
        Component B
        <h2>Count : {countContext.countState}</h2>
        <ComponentC />
    </div>;
}

export default ComponentB;