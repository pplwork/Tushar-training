import React from 'react';

function Eachlap(props) {
    const index=props.index;
    const lap=props.lap;
    const lapTimeString=props.lapTimeString;
    return <tr>
        <td>{index + 1}</td>
        {
            index - 1 >= 0 ?
                <td>{lapTimeString.slice(lapTimeString.length - 6, lapTimeString.length - 4)} : {lapTimeString.slice(lapTimeString.length - 4, lapTimeString.length - 2)} : {lapTimeString.slice(lapTimeString.length - 2, lapTimeString.length)}</td> :
                <td>{`0${lap.mins}`.slice(-2)} : {`0${lap.secs}`.slice(-2)} : {`0${lap.milsecs}`.slice(-2)}</td>
        }
        <td>{`0${lap.mins}`.slice(-2)} : {`0${lap.secs}`.slice(-2)} : {`0${lap.milsecs}`.slice(-2)}</td>
    </tr>;
}

export default Eachlap;
