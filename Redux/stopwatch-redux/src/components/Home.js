import React from 'react';
import Clock from './Clock';
import Button from './Button';
import Laps from './Laps';
import { useSelector, useDispatch } from 'react-redux';
import { updateTime, resetTime, addLap, dropLaps } from '../actions/index';
function Home() {

    const dispatch = useDispatch();
    const clock = useSelector(state => state.time.time);
    const laps = useSelector(state => state.laps.laps);

    const [isStart, setIsStart] = React.useState(false);

    const handleLap = () => {
        const lapnow = clock;
        dispatch(addLap(lapnow))
        console.log(laps);
    }

    const handleReset = () => {
        dispatch(resetTime());
        setIsStart(false);
        dispatch(dropLaps());
        clearInterval(idtime);
    }

    let idtime = React.useRef();
    const handleStart = (isRunning) => {
        if (!isRunning) {
            setIsStart(true);
            idtime.current = setInterval(() => {
                dispatch(updateTime())
            }, 10)
        } else {
            setIsStart(false);
            clearInterval(idtime.current);
        }
    }
    return <div className='home'>
        <div className='Left'>
            <Clock time={clock} />
            <div className='buttons'>
                <Button className="lap-btn" onClick={handleLap} disabled={!isStart} buttonName="Lap" />
                {!isStart && <Button className="start-btn" onClick={() => handleStart(isStart)} disabled={false} buttonName="Start" />}
                {isStart && <Button className="stop-btn" onClick={() => { handleStart(isStart) }} disabled={false} buttonName="Stop" />}
                <Button className="lap-btn" onClick={handleReset} disabled={isStart} buttonName="Reset" />
            </div>
        </div>
        <div className='Right'>
            <Laps laps={laps} />
        </div>
    </div>;
}

export default Home;
