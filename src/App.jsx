import './App.css'
import StopWatch from './StopWatch.jsx';
import Timer from './Timer.jsx';
import {useState} from 'react';

function App() {
  const [type, setType] = useState(true);
  const [text, setText] = useState('Change to timer');
  const [showTimer, setTimer] = useState(false);
  const ChangeState = (newType) => {
    setType(newType);
    if (newType) {
      setText('Change to stop-watch');
    } else {
      setText('Change to timer');
    }
    setTimer((prev) => !prev);
  };

  return (
    <>
      <div className="full">
        <div className="nav">
          <button className={"changeState"} onClick={() => ChangeState(!type)}>
            {text}
          </button>
        </div>
        <div className="timer-stopwatch">
          {showTimer ? <StopWatch /> : <Timer />}
        </div>
        <div className="down">

        </div>
      </div>
    </>
  )
}


export default App
