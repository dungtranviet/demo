import React, { useState, useEffect, useRef } from 'react';

function Clock() {
    const [seconds, setSeconds] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
          setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
      }, []);
    return (
        <div className="App">
        <header className="App-header">
          {seconds} seconds have elapsed since mounting.
        </header>
      </div>
    );
}

export default Clock;


// import React, { useState } from 'react';
// import './App.css';
// import CounterFunc from './component/5.hook/lifecycle/counter.funtion';


// function App() {
//   const [showClock, setShowClock] = useState(true);
//   return (
//     <div>
//       <h1>app component</h1>
//       <br></br>
//       <button onClick = {()=>setShowClock(!showClock)}>Remove Counter</button>
//       {showClock&&<Clock/>}
//     </div>
//   );
// }

// export default App;
