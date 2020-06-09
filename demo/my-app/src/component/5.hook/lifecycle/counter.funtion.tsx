import React, { useState, useEffect } from 'react';

function CounterFunc() {
    const [count,setCount] = useState(0);
    const [title,setTitle] = useState(0);
    function decrease(){
         setCount(count-1)
    }
    function increase(){
         setCount(count + 1)
    }
    useEffect(()=>{
        setTimeout(()=>{console.log('run useEffect')},2000)
        return () =>{
            setTimeout(()=>{console.log('run useEffect clean up')},1000)
        }
    })
    return (
        <div>
        <button onClick ={()=>{decrease()}}>-</button>
        {count}
        <button onClick ={()=>{increase()}}>+</button>
    </div>
    );
}

export default CounterFunc;


// import React, { useState } from 'react';
// import './App.css';
// import CounterFunc from './component/5.hook/lifecycle/counter.funtion';


// function App() {
//   const [showCouter, setShowCouter] = useState(true);
//   return (
//     <div>
//       <h1>app component</h1>
//       <br></br>
//       <button onClick = {()=>setShowCouter(!showCouter)}>Remove Counter</button>
//       {showCouter&&<CounterFunc/>}
//     </div>
//   );
// }

// export default App;
