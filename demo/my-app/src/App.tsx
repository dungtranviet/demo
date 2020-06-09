import React, { useState } from 'react';
import './App.css';
import Clock from './component/5.hook/cleanup/counter.funtion';


function App() {
  const [showClock, setShowClock] = useState(true);
  return (
    <div>
      <h1>app component</h1>
      <br></br>
      <button onClick = {()=>setShowClock(!showClock)}>Remove Counter</button>
      {showClock&&<Clock/>}
    </div>
  );
}

export default App;