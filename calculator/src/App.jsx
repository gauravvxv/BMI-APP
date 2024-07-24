import logo from './logo.svg';
import './App.css';
import { useMemo, useState } from 'react';

function App() {
  const[weight,setWeight] = useState(70);
  const[height,setHeight] = useState(170)

  const handleWeight = (e) => {
    setWeight(e.target.value);
  }

  const handleHeight = (e) => {
    setHeight(e.target.value);
  }

const output = useMemo(()=>{

  const calculatedHeight = height / 100;

  return (weight / (calculatedHeight*calculatedHeight)).toFixed(2);

},[weight,height])
  return (
    <div className="App">
      <div className='parent'>
      <div className='container'>
        <div className='heading'>
      <h1>Body mass index</h1>
        </div>
        <div className='child'>
          <p>Weight:{weight}kg</p>
          <input type="range" step="1" min="40" max="200" onChange={handleWeight} />

          <p>Height:{height}cm</p>
          <input type="range" min="130" max="220" onChange={handleHeight} />
           <p>Your BMI is</p>
           <p>{output}</p>
        </div>
      </div>

      </div>
    </div>
  );
}

export default App;
