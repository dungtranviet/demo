import React, { Component } from 'react';

interface customerInfor{
    name? : String,
    age? : number,
    contact: {
        email? :String,
        tel?: String
    }
}

class CustomerComponent extends Component<customerInfor> {
    // eslint-disable-next-line
    constructor(props : customerInfor){
        super(props)
    }
    render() {
        return (
            <div className="App">
                <div>Customer Infor</div>
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                <div>Email : {this.props.contact.email}</div>
                <div>Tel : {this.props.contact.tel}</div>
            </div>
        );
    }
}

export default CustomerComponent;


// import React from 'react';
// interface customerInfor{
//     name? : String,
//     age? : number,
//     contact: {
//         email? :String,
//         tel?: String
//     }
// }
// const CustomerComponent = (props:customerInfor) => {
//     return (
//         <div>  
//                 <div>Customer Infor</div>
//                 <div>Name: {props.name}</div>
//                 <div>Age: {props.age}</div>  
//                 <div>Email : {props.contact.email}</div>
//                 <div>Tel : {props.contact.tel}</div>
//         </div>
//     );
// };

// CustomerComponent.propTypes = {

// };

// export default CustomerComponent;


/* <div>
<h1>app component</h1>
<br></br>
<CustomerComponent name="Dung" age = {28} contact = {{email:'dungtvz91@gmail.com',tel : '0376910166'}}/>
</div> */