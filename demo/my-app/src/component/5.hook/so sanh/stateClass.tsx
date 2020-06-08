import React, { Component } from 'react';
interface Props {}
interface State{
    name : string,
    age : number,
    
}
class StateClass extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state ={
            name : 'hoang',
            age : 23
        }
    }
    changeName(){
        this.setState({name: 'hai'})
    }
    changeAge(){
        this.setState({age: 18})
    }
    render() {
        return (
            <div>
                <div onClick={this.changeName}>
                Name :{this.state.name}
            </div>
            <div onClick ={this.changeAge}>
                Age :{this.state.age}
            </div>
            </div>
        );
    }
}

export default StateClass;