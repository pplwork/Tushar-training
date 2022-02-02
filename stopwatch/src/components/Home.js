import React from 'react';

function Home() {
    const [isStart, setIsStart] = React.useState(false);
    const [secs, setSecs] = React.useState(0);
    const [mins, setMins] = React.useState(0);
    const [milsecs, setMilsecs] = React.useState(0);
    const [laps, setLaps] = React.useState([]);
    const handleLap = () => {
        const lapnow = { mins, secs, milsecs };
        setLaps(prev => {
            return [...prev, lapnow];
        })
    }

    const handleReset = () => {
        setSecs(0);
        setMins(0);
        setMilsecs(0);
        setIsStart(false);
        setLaps([]);
        clearInterval(idtime);
    }

    let idtime = React.useRef();
    const handleStart = (isRunning) => {
        if (!isRunning) {
            setIsStart(true);
            idtime.current = setInterval(() => {
                setMilsecs((prev) => {
                    if (prev === 99) {
                        setSecs((pre) => {
                            if (pre === 59) {
                                setMins((prev) => prev + 1);
                                return 0;
                            } else {
                                return pre + 1;
                            }
                        });
                        return 0;
                    }
                    return prev + 1;
                });
            }, 10)
        } else {
            setIsStart(false);
            clearInterval(idtime.current);
        }

    }
    return <div className='home'>
        <div className='Left'>
            <h1 className='time'>{`0${mins}`.slice(-2)} : {`0${secs}`.slice(-2)} : {`0${milsecs}`.slice(-2)}</h1>
            <div className='buttons'>
                <button className="lap-btn" onClick={handleLap} disabled={!isStart}>Lap</button>
                {!isStart && <button className="start-btn" onClick={() => { handleStart(isStart) }}>Start</button>}
                {isStart && <button className="stop-btn" onClick={() => { handleStart(isStart) }}>Stop</button>}
                <button className="lap-btn" onClick={handleReset} disabled={isStart}>Reset</button>

            </div>
        </div>
        <div className='Right'>
            <div className='tablewrap'>
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
                                        <tr>
                                            <td>{index + 1}</td>
                                            {
                                                index - 1 >= 0 ?
                                                    <td>{lapTimeString.slice(lapTimeString.length - 6, lapTimeString.length - 4)} : {lapTimeString.slice(lapTimeString.length - 4, lapTimeString.length - 2)} : {lapTimeString.slice(lapTimeString.length - 2, lapTimeString.length)}</td> :
                                                    <td>{`0${lap.mins}`.slice(-2)} : {`0${lap.secs}`.slice(-2)} : {`0${lap.milsecs}`.slice(-2)}</td>
                                            }
                                            <td>{`0${lap.mins}`.slice(-2)} : {`0${lap.secs}`.slice(-2)} : {`0${lap.milsecs}`.slice(-2)}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    </div>;
}

export default Home;
