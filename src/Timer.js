import react, {useState, useEffect} from 'react';

function Timer(){

    const [timer, setTimer] = useState(0);
    const [running, setRunning] = useState(false);

    const toggleRunning = () => {
        const newState = !running;
        setRunning(newState);
    }

    useEffect(() => {
        let x;

        if(running){
            x = setInterval(() => {
                console.log('run timeout', timer)
                setTimer((t) => t + 1)
            }, 1000)
        }

        return () => {
            clearInterval(x);
        }
    }, [running])

    const resetTimer = () => {
        setTimer(0);
        setRunning(false);
    }


    return <div>
        <p>Just a basic react timer</p>
        <div>{timer}</div>
        <div>
            <button onClick={() => toggleRunning()}>{running ? "Stop": "Start"}</button>
            <button onClick={() => resetTimer()}>Reset</button>
        </div>
        <div>
            <button disabled={running}>Start from</button>
        </div>
    </div>
}

export default Timer;
