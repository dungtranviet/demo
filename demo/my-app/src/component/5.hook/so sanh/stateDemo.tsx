import React, { useState } from 'react';
function StateDemo() {
    const [name, setName] = useState('hoang')
    const [age, setAge] = useState(23);
    function changeName(){
        setName('Hải')
    }
    function changeAge(){
        setAge(18)
    }
    return (
        <div>
            <div onClick={changeName}>
                Name :{name}
            </div>
            <div onClick ={changeAge}>
                Age :{age}
            </div>
        </div>
    );
}

export default StateDemo;
