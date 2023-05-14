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
                console.log('run timeout')
            }, 1000)
        }
   

        return () => {
            clearInterval(x);
        }
    }, [running])


    return <div>
        <p>This is the timer description</p>
        <div>{timer}</div>
        <button onClick={() => toggleRunning()}>{running ? "Stop": "Start"}</button>
        <button>Reset</button>
    </div>
}

export default Timer;
