import React, { Component } from 'react';
//rcc
class ClassComponent extends Component {
    render() {
        return (
            <div className="App">
            <div>ClassComponent</div>
            <form action="/action_page.php">
                <label htmlFor="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" defaultValue="John" /><br />
                <label htmlFor="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" defaultValue="Doe" /><br /><br />
                <input type="submit" defaultValue="Submit" />
            </form>
        </div>
        );
    }
}

export default ClassComponent;