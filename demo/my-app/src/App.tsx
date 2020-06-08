import React, { useState } from 'react';
import './App.css';
import Counter from './component/4.lifecycle/couter/couter.component';

function App() {
  const [showCouter, setShowCouter] = useState(true);
  return (
    <div>
      <h1>app component</h1>
      <br></br>
      <button onClick = {()=>setShowCouter(!showCouter)}>Remove Counter</button>
      {showCouter&&<Counter/>}
    </div>
  );
}

export default App;
