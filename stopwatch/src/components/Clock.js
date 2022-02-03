import React from 'react';

function Clock(props) {
    return <div>
        <h1 className='time'>{props.minutes} : {props.seconds} : {props.milseconds}</h1>
    </div>;
}

export default Clock;
