import React from 'react';
import Clock from './Clock';
import Button from './Button';
import Laps from './Laps';
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
            <Clock minutes={`0${mins}`.slice(-2)} seconds={`0${secs}`.slice(-2)} milseconds={`0${milsecs}`.slice(-2)} />
            <div className='buttons'>
                <Button className="lap-btn" onClick={handleLap} disabled={!isStart} buttonName="Lap" />
                {!isStart && <Button className="start-btn" onClick={() => handleStart(isStart)} disabled={false} buttonName="Start" />}
                {isStart && <Button className="stop-btn" onClick={() => { handleStart(isStart) }} disabled={false} buttonName="Stop" />}
                <Button className="lap-btn" onClick={handleReset} disabled={isStart} buttonName="Reset" />
            </div>
        </div>
        <div className='Right'>
            <Laps laps={laps}/>
        </div>
    </div>;
}

export default Home;
