import './App.css'
import {useState} from 'react';




function App() {
  const [type, setType] = useState(true);
  const [text, setText] = useState('Type is true');
  const ChangeState = (newType) => {
    setType(newType);
    if (newType) {
      setText('Type is true');
    } else {
      setText('Type is false');
    }
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

        </div>
        <div className="down">

        </div>
      </div>
    </>
  )
}


export default App
