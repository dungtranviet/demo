import React, { useState } from 'react';
import './App.css';
import CounterFunc from './component/5.hook/lifecycle/counter.funtion';


function App() {
  const [showCouter, setShowCouter] = useState(true);
  return (
    <div>
      <h1>app component</h1>
      <br></br>
      <button onClick = {()=>setShowCouter(!showCouter)}>Remove Counter</button>
      {showCouter&&<CounterFunc/>}
    </div>
  );
}

export default App;
