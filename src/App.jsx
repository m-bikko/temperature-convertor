import './App.css'
import Timer from './Timer.jsx';
import StopWatch from './StopWatch';
import {useState} from 'react';

function App() {
  const [type, setType] = useState(true);
  const [text, setText] = useState('Change to timer');
  const [showTimer, setTimer] = useState(true);
  const ChangeState = (newType) => {
    setType(newType);
    if (newType) {
      setText('Change to timer');
    } else {
      setText('Change to stop-watch');
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
          {showTimer ? <Timer /> : <StopWatch />}
        </div>
        <div className="down">

        </div>
      </div>
    </>
  )
}


export default App
