import React, { Component } from 'react';
interface countState {
    count : number
}
interface countProps {

}
class Counter extends Component<countProps,countState> {
    constructor(props: any){
        console.log('counter contructor');
        super(props);
        this.state ={
            count : 0 
        }
    }
    UNSAFE_componentWillMount(){
        console.log('counter componentWillMount');
    }
    componentDidMount(){
        console.log('counter componentDidMount');
    }
    shouldComponentUpdate(nextProps : countProps,nextState : countState){
        console.log('counter shouldComponentUpdate');
        if(this.state.count === nextState.count)
        return false
        else
        return true;
    }
    UNSAFE_componentWillUpdate(){
        console.log('counter componentWillUpdate');
    }
    componentDidUpdate(){
        console.log('counter componentDidUpdate');
    }
    componentWillUnmount(){
        console.log('counter componentWillUnmount');
    }
    increase(){
        console.log('===============>','counter increase');
        this.setState({
            count : this.state.count + 1
        })
    }
    decrease(){
        console.log('===============>','counter decrease');
        this.setState({
            count : this.state.count - 1
        })
    }

    render() {
        console.log('counter render');
        return (
            <div>
                <button onClick ={()=>{this.decrease()}}>-</button>
                {this.state.count}
                <button onClick ={()=>{this.increase()}}>+</button>
            </div>
        );
    }
}

export default Counter;


// import React, { useState } from 'react';
// import './App.css';
// import Counter from './component/4.lifecycle/couter/couter.component';

// function App() {
//   const [showCouter, setShowCouter] = useState(true);
//   return (
//     <div>
//       <h1>app component</h1>
//       <br></br>
//       <button onClick = {()=>setShowCouter(!showCouter)}>Remove Counter</button>
//       {showCouter&&<Counter/>}
//     </div>
//   );
// }

// export default App;
