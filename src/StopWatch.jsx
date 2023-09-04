import './StopWatch.css'
import './App.css'
import {useEffect, useState} from "react";

function StopWatch() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const startStopWatch = () => {
        const btn = document.querySelector(".start-stop-btn");
        setIsRunning(!isRunning);
        if(isRunning){
            btn.style.background = `green`;
        }else{
            btn.style.background = `red`;
        }
    };

    const resetStopWatch = () => {
        setIsRunning(false);
        setTime(0);
    };

    return (
        <div className={"Timer"}>
            <h1 className={"main-txt"}>Stopwatch</h1>
            <p className={'formatted-Time'}>{formatTime(time)}</p>
            <div className={"btn-collection"}>
                <button className={"start-stop-btn"} onClick={startStopWatch}>
                    {isRunning ? 'Stop' : 'Start'}
                </button>
                <button className={"reset-btn"} onClick={resetStopWatch}>Reset</button>
            </div>

        </div>
    );

}

function formatTime(miliSeconds) {
    const hours = Math.floor(miliSeconds / 360000);
    const minutes = Math.floor(miliSeconds / 6000);
    const seconds = Math.floor(miliSeconds / 100) % 60;
    const millis = miliSeconds % 100;
    return `${hours}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}:${millis < 10 ? '0' : ''}${millis}`;
}

export default StopWatch;