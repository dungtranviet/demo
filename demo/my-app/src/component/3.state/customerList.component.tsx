import React, { Component } from 'react';
interface CustomerInfor {
    name : String,
    age : number,
    contact : {
        email:String,
        tel: String
    }
}
interface CustomerProps {
}
interface CustomerState {
    customers: Array<CustomerInfor>
}
class CustomerListComponent extends Component<CustomerProps, CustomerState> {
    constructor(props:CustomerProps) {
        super(props);
        this.state = {
            customers: [
                {
                    name: 'Nguyễn Nhật Anh',
                    age: 23,
                    contact: {
                        email: 'nhâtnh@gmail.com',
                        tel: '0378272918'
                    }
                },
                {
                    name: 'Trần Anh Tuấn',
                    age: 33,
                    contact: {
                        email: 'anhtuan@gmail.com',
                        tel: '0378243543'
                    }
                },
                {
                    name: 'Trần Toàn',
                    age: 18,
                    contact: {
                        email: 'trantoan@gmail.com',
                        tel: '0378453916'
                    }
                },
            ],
        }
    }
    render() {
        // var elements = this.state.customers.map((customer, index) => {

        //     var result =
        //         <div>
        //             <div>Customer Infor</div>
        //             <div>Name: {customer.name}</div>
        //             <div>Age: {customer.age}</div>
        //             <div>Email : {customer.contact.email}</div>
        //             <div>Tel : {customer.contact.tel}</div>
        //         </div>
        //     return result
        // })
        return (
            //{ elements }
            <h1>ok</h1>
        );
    }
}

export default CustomerListComponent;


// import React from 'react';
// interface customerInfor{
//     name? : String,
//     age? : number,
//     contact: {
//         email? :String,
//         tel?: String
//     }
// }
// const CustomerListComponent = (props:customerInfor) => {
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

// CustomerListComponent.propTypes = {

// };

// export default CustomerListComponent;

//sử dụng
{/* <div>
<h1>app component</h1>
<br></br>
<CustomerListComponent/>
</div> */}