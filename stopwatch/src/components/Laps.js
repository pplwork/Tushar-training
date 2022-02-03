import React from 'react';
import Eachlap from './Eachlap';

function Laps(props) {
  const laps=props.laps;
  return <div className='tablewrap'>
    {
      laps.length !== 0 &&
      <table>
        <thead><tr><th>LAP</th><th>LAP TIMING</th><th>OVERALL TIME</th></tr></thead>
        <tbody>
          {
            laps.map((lap, index) => {
              var lapTimeString = "";
              if (index - 1 >= 0) {
                const prevTime = laps[index - 1].milsecs + laps[index - 1].secs * 100 + laps[index - 1].mins * 10000;
                const curTime = lap.milsecs + lap.secs * 100 + lap.mins * 10000;
                const laptime = curTime - prevTime;
                lapTimeString = ("000000" + laptime.toString()).slice(-6);
              }

              return (
                <Eachlap index={index} lap={lap} lapTimeString={lapTimeString}/>
              )
            })
          }
        </tbody>
      </table>
    }
  </div>;
}

export default Laps;
